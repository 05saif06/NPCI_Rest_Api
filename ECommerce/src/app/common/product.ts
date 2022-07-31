export class Product {

    constructor(public prodId : number,
        public sku : String,
        public name : String,
        public description : String,
        public unitPrice : number,
        public imageURL : String,
        public unitsInStock : number,
        public dateCreated : String,
        public lastUpdated : String,
        public categoryId : number){}

}
