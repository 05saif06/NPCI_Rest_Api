export class Product {

    constructor(public prodId: number,
                public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageURL: string,
                public unitsInStock: number,
                public dateCreated: Date,
                public lastUpdated: Date,
                public categoryId: number
        ){

    }
}
