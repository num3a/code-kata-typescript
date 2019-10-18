// 1ere approche : Refactoring
// On a pas pas le droit de toucher le code legacy
// tant qu'on a pas couvert toutes les règles de gestion avec nos tests
// updateQuality s'exécute tous les jours

// Test 1
// “Aged Brie” actually increases in Quality the older it gets. The Quality of an item is never more than 50

// Test 2
// “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality

// Test 3
// “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches;
//Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

// sellin === nombres de jours avant la date de péremption
// updateQuality === equivalent à un jour
// sauf pou les cas particuliers, sellIn et quality diminue de 1, à chaque updateQuality

import {GildedRose} from './gilded-rose';
import {Sulfuras} from "./items/sulfuras";
import {Backstage} from "./items/backstage";
import {AgedBrie} from "./items/agedbrie";
import {GenericItem} from "./items/genericitem";
import {Conjured} from "./items/conjured";
import {BaseItem} from "./items/baseItem";

describe('Gilded Rose', function () {

    /*     it('should SellIn value which denotes the number of days we have to sell the item',
            function() {
                const gildedRose = new GildedRose([ new BaseItem('foo', 1, 0) ]);
                const items = gildedRose.updateQuality();
                expect(items[0].sellIn).toEqual(0);
        }); */


    describe('Generic Items', function () {

        it('should decrease Quality', function () {

            // Given // Arrange
            const item = new GenericItem('item1', 2, 2);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(1);
        });

        it('should decrease SellIn for item', function () {

            // Given // Arrange
            const item = new GenericItem('item1', 2, 0);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.sellIn).toEqual(1);
        });

        it('quality should never be negative', function () {

            // Given // Arrange
            const item = new GenericItem('item1', 2, 0);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(0);
        });

        it('should quality degrades twice as fast when sellin date passed', function () {

            // Given // Arrange
            const item = new GenericItem('item1', 0, 10);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(8);
        });

        it('should lowers both values (sellin and quality) At the end of each day for every item', function () {

            // Given // Arrange
            const item = new GenericItem('item1', -1, 2);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.sellIn).toEqual(-2);
            expect(itemResult.quality).toEqual(0);
        });

    });

    describe('for Aged brie item', function () {


        it('should increase quality when quality is less than 50', function () {

            // Given // Arrange
            const item = new AgedBrie(2, 48);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(49);
        });

        it('should not increase quality  when quality equal to 50', function () {

            // Given // Arrange
            const item = new AgedBrie(2, 50);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(50);
        });

        it('should decrease sellin item', function () {

            // Given // Arrange
            const item = new AgedBrie(5, 2);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.sellIn).toEqual(4);
        });

  /*      xit('should lowers both values (sellin and quality) At the end of each day for Aged Brie item', function () {

            // Given // Arrange
            const item = new AgedBrie(-1, 2);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.sellIn).toEqual(-2);
            expect(itemResult.quality).toEqual(4);
        });*/
    });

    describe('for Sulfuras item', function () {
        it('should never increase or decrease quality and sellin', function () {

            // Given // Arrange
            const itemSulfuras = new Sulfuras(2, 2);
            const gildedRose = new GildedRose([itemSulfuras]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemSulfurasResult = gildedRose.items[0];
            expect(itemSulfurasResult.quality).toEqual(2);
            expect(itemSulfurasResult.sellIn).toEqual(2);
        });
    });


    describe('for Backstage item', function () {

        it('should quality increases like aged brie when sellin greater than 10', function () {

            // Given // Arrange
            const item = new Backstage(11, 20);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(21);
        });

        it('should quality increases by 2 when sellin equal or less than 10', function () {

            // Given // Arrange
            const item = new Backstage(10, 20);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(22);
        });

        it('should quality increases by 3 when sellin equal or less than 5', function () {

            // Given // Arrange
            const item = new Backstage(5, 20);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(23);
        });

        it('should quality drops to 0 after the concert', function () {

            // Given // Arrange
            const item = new Backstage(0, 20);
            const gildedRose = new GildedRose([item]);

            // When // Act
            gildedRose.updateQuality();

            // Then // Assert
            const itemResult = gildedRose.items[0];
            expect(itemResult.quality).toEqual(0);
        });
    });

    describe('for Conjured item', function () {
        it('should degrades twice as fast than generic items', function () {
            const item = new Conjured( 10, 10);
            const gildedRose = new GildedRose([item]);

            gildedRose.updateQuality();

            const dayOne = gildedRose.items[0];
            expect(dayOne.quality).toEqual(8);


            gildedRose.updateQuality();

            const dayTwo = gildedRose.items[0];
            expect(dayTwo.quality).toEqual(6);
        });
    });

});
