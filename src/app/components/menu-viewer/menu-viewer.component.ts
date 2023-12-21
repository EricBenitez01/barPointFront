import { Component } from '@angular/core';

const ZOOM_STEP: number = 0.25;
const DEFAULT_ZOOM: number = 0.75;
const MAX_ZOOM: number = 2.5;

@Component({
    selector: 'app-menu-viewer',
    templateUrl: './menu-viewer.component.html',
    styleUrls: ['./menu-viewer.component.css']
})
export class MenuViewerComponent {
    pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";


    public pdfZoom: number = DEFAULT_ZOOM;

    zoomIn() {
        if (this.pdfZoom < MAX_ZOOM) {
            this.pdfZoom += ZOOM_STEP;
        }
    }

    zoomOut() {
        if (this.pdfZoom > DEFAULT_ZOOM) {
            this.pdfZoom -= ZOOM_STEP;
        }
    }

    resetZoom() {
        this.pdfZoom = DEFAULT_ZOOM;
    }
}
