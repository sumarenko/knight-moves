import { Component, ViewChild, OnInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditorComponent } from './editor/editor.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public matDialog: MatDialog) { 
  }

  //fieldSize: number = 0;

  selectFieldSize() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "select-field-size";
    dialogConfig.height = "window.screen.height";
    dialogConfig.width = "window.screen.width";
    const modalDialog = this.matDialog.open(EditorComponent, dialogConfig);
    modalDialog.afterClosed().subscribe(fieldSize => {
      dialogConfig.data = fieldSize;
    });
  }

  @ViewChild(BoardComponent) child!: BoardComponent;

  takeStepBack() {
    this.child.stepBack(); 
  }

  restart() {
    this.child.restart(); 
  }

}
