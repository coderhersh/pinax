import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { VersionsComponent } from './versions/versions.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { PreBuiltTemplatesComponent } from './product-landing/pre-built-templates/pre-built-templates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    VersionsComponent,
    PurchaseComponent,
    ProductLandingComponent,
    PreBuiltTemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
