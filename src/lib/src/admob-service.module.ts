import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AdMobFree } from '@ionic-native/admob-free';

import { AdmobService } from './providers/admob';

export * from './providers/admob';

@NgModule({
    imports: [CommonModule]
})
export class AdmobServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdmobServiceModule,
            providers: [AdmobService, AdMobFree]
        };
    }
}
