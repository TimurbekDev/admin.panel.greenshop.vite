export declare interface IGetProductParam {
    page: number,
    name?: string,
    size?: string,
    tags?: string,
    limit: number,
    status?: string,
    category?: string | null,
    max_price?: string,
    min_price?: string
}