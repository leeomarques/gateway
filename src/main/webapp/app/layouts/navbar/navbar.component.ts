import { Component, OnInit, createNgModule, Injector } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { StateStorageService } from 'app/core/auth/state-storage.service';
import SharedModule from 'app/shared/shared.module';
import HasAnyAuthorityDirective from 'app/shared/auth/has-any-authority.directive';
import { VERSION } from 'app/app.constants';
import { LANGUAGES } from 'app/config/language.constants';
import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import { LoginService } from 'app/login/login.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { EntityNavbarItems } from 'app/entities/entity-navbar-items';

import { loadNavbarItems, loadTranslationModule } from 'app/core/microfrontend';
import ActiveMenuDirective from './active-menu.directive';
import NavbarItem from './navbar-item.model';

@Component({
  standalone: true,
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [RouterModule, SharedModule, HasAnyAuthorityDirective, ActiveMenuDirective],
})
export default class NavbarComponent implements OnInit {
  inProduction?: boolean;
  isNavbarCollapsed = true;
  languages = LANGUAGES;
  openAPIEnabled?: boolean;
  version = '';
  account: Account | null = null;
  entitiesNavbarItems: NavbarItem[] = [];
  mfont1EntityNavbarItems: NavbarItem[] = [];
  mfont2EntityNavbarItems: NavbarItem[] = [];

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService,
    private stateStorageService: StateStorageService,
    private injector: Injector,
    private accountService: AccountService,
    private profileService: ProfileService,
    private router: Router,
  ) {
    if (VERSION) {
      this.version = VERSION.toLowerCase().startsWith('v') ? VERSION : `v${VERSION}`;
    }
  }

  ngOnInit(): void {
    this.entitiesNavbarItems = EntityNavbarItems;
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });

    this.accountService.getAuthenticationState().subscribe(account => {
      this.account = account;
      this.loadMicrofrontendsEntities();
    });
  }

  changeLanguage(languageKey: string): void {
    this.stateStorageService.storeLocale(languageKey);
    this.translateService.use(languageKey);
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed = true;
  }

  login(): void {
    this.loginService.login();
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  loadMicrofrontendsEntities(): void {
    // Lazy load microfrontend entities.
    loadNavbarItems('mfont1').then(
      async items => {
        this.mfont1EntityNavbarItems = items;
        try {
          const LazyTranslationModule = await loadTranslationModule('mfont1');
          createNgModule(LazyTranslationModule, this.injector);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error loading mfont1 translation module', error);
        }
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('Error loading mfont1 entities', error);
      },
    );
    loadNavbarItems('mfont2').then(
      async items => {
        this.mfont2EntityNavbarItems = items;
        try {
          const LazyTranslationModule = await loadTranslationModule('mfont2');
          createNgModule(LazyTranslationModule, this.injector);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error loading mfont2 translation module', error);
        }
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('Error loading mfont2 entities', error);
      },
    );
  }
}