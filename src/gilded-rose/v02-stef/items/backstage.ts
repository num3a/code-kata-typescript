import {BaseItem} from "./baseItem";

export class Backstage extends BaseItem {
    constructor(sellIn: number, quality: number) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality)
    }

    increaseQuality() {
      super.increaseQuality();

        if (this.sellIn < 11) {
            this.quality++;
        }
        if (this.sellIn < 6) {
            this.quality++;
        }
    }

    shouldDecreaseQuality() {
        return (this.sellIn <= 0);
    }

    decreaseQuality() {
        this.quality = 0;
    }

}
