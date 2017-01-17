import {Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, ApplicationRef} from '@angular/core';
import {BlockComponent} from './block.component';

@Component({
    selector: 'app',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
		<div id="pageHolder" style="width: 100%; height: 100%;">
			<div [ngStyle]="blockStyles()"></div>
		</div>
	`,
})

/**
 * book component
 */
export class AppComponent {

    public top: number;
    public left: number;

    /**
     * constructor
     * @param PlayerService _playerService
     * @param Config _config
     */
    constructor(private _cd: ChangeDetectorRef,
                private _app: ApplicationRef) {
    }

    /**
     * init lifecycle event
     */
    ngOnInit() {
        window.setTimeout(
            () => {
                this.initMultiTouch();
            }
            , 500);
    }

    /**
     * init multitouch gestures
     */
    initMultiTouch() {
        let thisObj = this;

        this._hammerManager = new Hammer.Manager($('#pageHolder')[0], {
            touchAction: 'auto',
            recognizers: [
                [Hammer.Pan]
            ]
        });

        this._hammerManager.on('panstart', function (evt) {
            this.left = evt.center.x;
            this.top = evt.center.y;
        }.bind(this));

        this._hammerManager.on('panmove', function (evt) {
            this.left = evt.center.x;
            this.top = evt.center.y;
        }.bind(this));

        this._hammerManager.on('panend', function (evt) {
            this.left = evt.center.x;
            this.top = evt.center.y;
        }.bind(this));
    }

    blockStyles() {
        return {
            width: '50px',
            height: '50px',
            top: this.top + 'px',
            left: this.left + 'px',
            background: 'red',
            position: 'absolute'
        }
    }
}