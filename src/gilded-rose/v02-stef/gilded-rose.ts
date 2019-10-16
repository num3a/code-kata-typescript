export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name:string, sellIn:number, quality:number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}


export class GildedRose {

    private readonly AGED_BRIE:string = 'Aged Brie';
    private readonly SULFURAS:string = 'Sulfuras, Hand of Ragnaros';
    private readonly BACKSTAGE:string = 'Backstage passes to a TAFKAL80ETC concert';

    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    increaseQuality(item:Item):void{
        item.quality++;
    }

    decreaseQuality(item:Item):void{
        if(item.quality === 0){
            debugger;
        }
        item.quality--;
    }

    decreaseSellin(item:Item):void{
        item.sellIn--;
    }

    isGenericItem(item:Item) { 
        if (item.name == this.SULFURAS) {
            return false;
        }

        if(item.name == this.AGED_BRIE || item.name == this.BACKSTAGE){
            return false;
        }
        if(item.quality <= 0) {
            return false;
        }
        
        return true;
        /*if (item.name === this.SULFURAS) {
            return false;
        }
        if (item.quality > 0) {
            return true;
        }*/
        if (item.name != this.AGED_BRIE && item.name != this.BACKSTAGE) {
            if (item.quality > 0) {
                if (item.name != this.SULFURAS) {
                    return true;
                }
                return false;
            }
            return false;
        }
        return false;
    };

    updateQuality() {

        for (const item  of this.items) {
             if (this.isGenericItem(item)) {
                this.decreaseQuality(item);
            }  
           /*  if (item.name != this.AGED_BRIE && item.name != this.BACKSTAGE) {
                if (item.quality > 0) {
                    if (item.name != this.SULFURAS) {
                        this.decreaseQuality(item);
                    }
                }
            } */
            
            else {
                if (item.quality < 50) {
                    this.increaseQuality(item);
                    if (item.name == this.BACKSTAGE) {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                this.increaseQuality(item);
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                this.increaseQuality(item);
                            }
                        }
                    }
                }
            }
            if (item.name != this.SULFURAS) {
                this.decreaseSellin(item);
            }
            if (item.sellIn < 0) {
                if (item.name != this.AGED_BRIE) {
                    if (item.name != this.BACKSTAGE) {
                        if (item.quality > 0) {
                            if (item.name != this.SULFURAS) {
                                this.decreaseQuality(item);
                            }
                        }
                    } else {
                        item.quality = 0;
                    }
                } else {
                    if (item.quality < 50) {
                        this.increaseQuality(item);
                    }
                }
            }
        }

        return this.items;
    }
}
