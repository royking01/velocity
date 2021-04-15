import { OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FitBoundsAccessor, FitBoundsService } from '../services/fit-bounds';
/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
import * as ɵngcc0 from '@angular/core';
export declare class AgmFitBounds implements OnInit, OnDestroy, OnChanges {
    private readonly _fitBoundsAccessor;
    private readonly _fitBoundsService;
    /**
     * If the value is true, the element gets added to the bounds of the map.
     * Default: true.
     */
    agmFitBounds: boolean;
    private _destroyed$;
    private _latestFitBoundsDetails;
    constructor(_fitBoundsAccessor: FitBoundsAccessor, _fitBoundsService: FitBoundsService);
    /**
     * @internal
     */
    ngOnChanges(): void;
    /**
     * @internal
     */
    ngOnInit(): void;
    private _updateBounds;
    /**
     * @internal
     */
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AgmFitBounds, [{ self: true; }, null]>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AgmFitBounds, "[agmFitBounds]", never, { "agmFitBounds": "agmFitBounds"; }, {}, never>;
}

//# sourceMappingURL=fit-bounds.d.ts.map