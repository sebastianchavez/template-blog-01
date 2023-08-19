export interface IPost {
    title: string;
    description: string;
    image: string;
    file: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
    category?: string;
}