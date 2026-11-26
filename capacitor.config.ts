const config = {
  appId: 'com.karachibikerunner.app',
  appName: 'Karachi Bike Runner',
  webDir: 'dist',
  plugins: {
    AdMob: {
      // Configure your real AdMob App ID in android/app/src/main/AndroidManifest.xml
      // (com.google.android.gms.ads.APPLICATION_ID) and ios/App/App/Info.plist (GADApplicationIdentifier).
      initializeForTesting: false,
    },
  },
};

export default config;
