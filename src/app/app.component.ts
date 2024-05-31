import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddressComponent } from './address/address.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
imports: [RouterOutlet, NavbarComponent,HeroSectionComponent,CategoriesComponent,AboutComponent,BlogComponent,OurBlogComponent,ContactUsComponent,AddressComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookStore';
}
