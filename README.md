# AdmobService

Simplifies the display of Admob banner & interstitial. 💰  
Based on [AdmobFree](https://ionicframework.com/docs/native/admob-free/). Cordova and Ionic Native plugins must be installed.

❗️ For the time being use our own [webfactor fork](https://github.com/webfactor/lycwed-cordova-plugin-admob-free.git) of admob-free plugin to be able to specify the google sdk version:
```json
// package.json
"lycwed-cordova-plugin-admob-free": "https://github.com/webfactor/lycwed-cordova-plugin-admob-free.git"

"lycwed-cordova-plugin-admob-free": {
    "GOOGLE_API_VERSION": "11.2.0"
}
```

## Installation

- Install via npm  
`npm i @webfactor/ionic-admob-service`

- Add `AdmobServiceModule.forRoot()` to your ionic module imports

## Methods

```typescript
setBannerIds(ids: { android: string; ios: string }): void
```
Sets banner ids for both platforms. If not set, Admob test ids are used.

```typescript
setInterstitialIds(ids: { android: string; ios: string }): void
```
Sets interstitial ids for both platforms. If not set, Admob test ids are used.

```typescript
prepareBanner(
    autoShow: boolean = false,
    bannerAtTop: boolean = false,
    isTesting: boolean = false
): Promise<any>
```
Prepares a banner to be shown. Params should be self-explanatory.

```typescript
showBanner(): Promise<any> 
```
Manually show banner after successful preparation.

```typescript
hideBanner(): Promise<any>
```
Manually hide banner if present.

```typescript
removeBanner(): Promise<any>
```
Manually remove banner completely.

```typescript
prepareInterstitial(autoShow: boolean = false, isTesting: boolean = false): Promise<any>
```
Prepares an interstitial to be shown. Params should be self-explanatory.  
❗️Fullfilled promise doesn't mean it's ready to show.

```typescript
showInterstitial(): Promise<any>
```
Manually show prepared interstitial.


## Example
```typescript
constructor(
    private platform: Platform,
    private admobService: AdmobService
) {
    this.platform.ready().then(() => {
        this.admobService.setBannerIds({
            ios: 'insert_id_here',
            android: 'and_here'
        });
        this.admobService.prepareBanner(true);
    });
}
``` 