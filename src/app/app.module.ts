import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { ArticleThumbnailComponent } from './article-thumbnail/article-thumbnail.component';
import { CategoryComponent } from './category/category.component';
import { SuggestedArticlesComponent } from './suggested-articles/suggested-articles.component';
import { OpenArticleComponent } from './open-article/open-article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    ArticleThumbnailComponent,
    CategoryComponent,
    SuggestedArticlesComponent,
    OpenArticleComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
