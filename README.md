- Git clone the project

## FOR IOS

- cd into the project and run ```npm install```

- run ```npm install --save react-native-maps```

- run ```react-native link react-native-maps```

- create Podfile in ios folder
  https://github.com/airbnb/react-native-maps/blob/master/example/ios/Podfile
  comment out the google maps lines

- run ```sudo gem install cocoapods```
  run ```pod install``` inside ios folder

- open ios/MapView.xcworkspace

- click on yellow warning sign and click update the project on the left menu
  accept the changes and wait to complete

- leave the xcode project open and run ```react-native run-ios``` from the main project folder

This is based in the tutorial by Mario Díez
You can fint it here: https://www.youtube.com/channel/UCisGMoxaVxJMcbio2FBHORg

## FOR ANDROID

- Enable google maps services for android in the developer console

- Create a credential for the google maps services 
  https://console.developers.google.com/apis/credentials
  
- Add the credential on the ```AndroidManifest.xml``` file

- The emulator has to have the google api enabled
  https://cl.ly/2i2k0Y1m323D
  
- Open the project in android studio and update all

- Add to ```MainApplication.java```
  ```
  import com.airbnb.android.react.maps.MapsPackage;
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new MapsPackage()
    );
  }```
  
- Run 'react-native run-android'
