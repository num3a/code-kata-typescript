import {BaseItem} from "./baseItem";

export class Conjured extends BaseItem {
    constructor(sellIn: number, quality: number) {
        super('Conjured', sellIn, quality)
    }

    decreaseQuality() {
        this.quality -= 2;
    }

}
