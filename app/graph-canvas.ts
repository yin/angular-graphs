import {Component,ViewChild,ElementRef} from '@angular/core';
import {GraphModel} from "./graph-model/graph-model";
import {GraphRenderer} from "./graph-control/renderer";
import {GraphControlSettings} from "./graph-control/control";

@Component({
  selector: 'graph-canvas',
  inputs: ['width', 'height'],
  template: '<canvas #canvas [attr.width]="width" [attr.height]="height"></canvas>'
})
export class GraphCanvas {
  private width:number = 640;
  private height:number = 480;
  @ViewChild('canvas') canvas:ElementRef;
  private renderer:GraphRenderer;

  constructor() {
    var settings = new GraphControlSettings();
    this.renderer = new GraphRenderer(settings);
  }

  setModel(model:GraphModel) {
    var canvas = <HTMLCanvasElement>this.canvas.nativeElement;
    var ctx = canvas.getContext("2d");
    this.renderer.draw(model, ctx);
    console.log(model);
  }
}