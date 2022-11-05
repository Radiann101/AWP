import { Article, ArticleThumbnail } from "./models";

export const testArticleThumbnail: ArticleThumbnail = {
    category: 'articles',
    title: 'Faker makes it into the Worlds finals after 5 years',
    imageName: 'faker.jpg',
};

export const testArticle: Article ={
    id: 'Faker-makes-it-into-the-Worlds-finals-after-5-years',
    title:'Faker Makes It Into The Worlds Finals After 5 Years',
    category: 'articles',
    createdAt: '2022/11/04 16:24:22',
    createdBy: 'Abcdefgh',
    modifiedAt: '2022-11-05 21:40:22',
    description: [
        {
            content:
                'Faker finally back to worlds finals.',
            imageName: 'faker.jpg'
        },
        {
            content:
                'Together with his team',
            imageName: 't1.jpg'
        },
        {
            content:
                'They will go up against huge worlds surprise DRX',
            imageName: 'DRX.jpg'
        }
    ]
}