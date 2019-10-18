import {BaseItem} from "./baseItem";

export class Sulfuras extends BaseItem {
    constructor(sellIn: number, quality: number) {
        super('Sulfuras, Hand of Ragnaros', sellIn, quality)
    }

    decreaseQuality() {
    }
    decreaseSellIn() {
    }
}
