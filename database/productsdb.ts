 
export class ProductInfo {
    constructor(
       public ProductRowId:number,
       public ProductId:string,
       public ProductName:string,
       public CategoryName:string,
       public Manufacturer: string,
       public Description:string,
       public BasePrice:number
    ){}
}

export const Products:Array<ProductInfo> = new Array<ProductInfo>();

Products.push (new ProductInfo(1,'Prod-011', 'Laptop', 'Electronics', 'MS-Technos','16 GB Fast Gaming Laptop',340000));
Products.push (new ProductInfo(2,'Prod-012', 'Desktop', 'Electronics', 'LS-Technos','64 GB Server',240000));
Products.push (new ProductInfo(3,'Prod-013', 'RAM', 'Electronics', 'TS-Technos','DDR4',4400));
Products.push (new ProductInfo(4,'Prod-014', 'Charger', 'Electronics', 'MS-Technos','50Kwa Strong Power',4000));
Products.push (new ProductInfo(5,'Prod-015', 'HDD', 'Electronics', 'LS-Technos','10 TB Store',5000));
Products.push (new ProductInfo(6,'Prod-016', 'SSD', 'Electronics', 'TS-Technos','4 TB Fast Read Write Store',14000));
Products.push (new ProductInfo(7,'Prod-017', 'Printer', 'Electronics', 'MS-Technos','All-in-One Doc Smart',5000));
Products.push (new ProductInfo(8,'Prod-018', 'USB', 'Electronics', 'LS-Technos','16 GB Solid Store',3400));
Products.push (new ProductInfo(9,'Prod-019', 'Flash Drive', 'Electronics', 'TS-Technos','64 GB Data Sore',4400));
Products.push (new ProductInfo(10,'Prod-020', 'Keyboard', 'Electronics', 'MS-Technos','105 Keys Gaming Controller',740));
Products.push (new ProductInfo(11,'Prod-021', 'Laptop Holder', 'Electronics', 'LS-Technos','45 Degree Inclination',7400));
Products.push (new ProductInfo(12,'Prod-021', 'Laptop Holder', 'Electronics', 'LS-Technos','45 Degree Inclination',7400));
