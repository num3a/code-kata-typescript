import {BaseItem} from "./baseItem";

export class GenericItem extends BaseItem {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality)
    }

}
