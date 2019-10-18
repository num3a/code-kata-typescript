import {BaseItem} from "./items/baseItem";

export class GildedRose {

    items: Array<BaseItem>;

    constructor(items = [] as Array<BaseItem>) {
        this.items = items;
    }

    updateQuality() {

        for (const item of this.items) {

            if (item.shouldDecreaseQuality()) {
                item.decreaseQuality();
            } else {
                item.increaseQuality();
            }

            item.decreaseSellIn();
        }

        return this.items;
    }
}
