export declare interface IProduct {
    key:number;
    product_id: string;
    product_name: string;
    category_id: string;
    short_description: string;
    product_description: string;
    product_status: string;
    size: string[];
    count: number;
    cost: number;
    discount: number;
    tags: string[];
    liked: boolean;
    basket: boolean;
    image_url: string[];
}