- Git clone the project

- cd into the project and run 'npm install'

- run 'npm install --save react-native-maps'

- run 'react-native link react-native-maps'

- create Podfile in ios folder
  https://github.com/airbnb/react-native-maps/blob/master/example/ios/Podfile
  comment out the google maps lines

- run 'sudo gem install cocoapods'
  run 'pod install' inside ios folder

- open ios/MapView.xcworkspace

- click on yellow warning sign and click update the project on the left menu
  accept the changes and wait to complete

- leave the xcode project open and run 'react-native run-ios' from the main project folder

This is based in the tutorial by Mario Díez
You can fint it here: https://www.youtube.com/channel/UCisGMoxaVxJMcbio2FBHORg
