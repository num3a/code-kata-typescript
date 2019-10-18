import {BaseItem} from "./baseItem";

export class AgedBrie extends BaseItem {
    constructor(sellIn: number, quality: number) {
        super('Aged Brie', sellIn, quality)
    }

    shouldDecreaseQuality() {
        return false;
    }
}
