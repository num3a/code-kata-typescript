export abstract class BaseItem {
    name: string;
    sellIn: number;
    quality: number;

    protected constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    shouldDecreaseQuality() {
        return this.quality >= 0;
    }

    decreaseQuality() {
        if (this.quality > 0) {
            this.quality--;
            if (this.sellIn <= 0) {
                this.quality--;
            }
        }
    }

    increaseQuality() {
        if (this.quality < 50)
            this.quality++;
    }

    decreaseSellIn() {
        this.sellIn--;
    }
}
