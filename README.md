# React Native Auth Boilerplate

This is a React Native boilerplate with auth already implemented. It uses [Nativebase](https://nativebase.io) for UI and [Hasura APIs](https://hasura.io/features/auth) for backend.

![gif](https://raw.githubusercontent.com/hasura/react-native-auth-boilerplate/master/readme-assets/ios/ios_gif.gif)

> You can also use it without Hasura, but you will have to write your own backend implementation.

You can use it with and without the Expo SDK.

## Try out on Expo

Scan this QR Code from your Expo application to try out this application.

![gif](https://raw.githubusercontent.com/hasura/react-native-auth-boilerplate/master/readme-assets/expo.png)

## Who should use this?

- Fullstack React Native developers looking to start building an app with authentication already covered.
- Developers at a hackathon trying to build React Native applications from scratch.
- Developers who want a working authentication backend to further customize it as per their requirements.
- Developers trying to use Hasura with React Native.
- Developers who need basic authentication UI and want to write the backend logic themselves.  


## Getting Started

### With Hasura APIs

Make sure to have [hasura CLI](https://docs.hasura.io/0.15/manual/install-hasura-cli.html) installed.

- Clone the repo and `cd` into it.

  ```bash
  $ git clone https://github.com/hasura/react-native-auth-boilerplate
  ```

- `cd` into expo directory if you wish to use the expo SDK or `cd` into vanilla directory

- Quickstart the base Hasura project and apply the configuration of the project to the newly created [Hasura cluster](https://docs.hasura.io/0.15/manual/cluster/index.html)

  ```bash
  $ hasura quickstart base
  $ cd base
  $ git add . && git commit -m "Applying configuration"
  $ git push hasura master
  ```

> The `hasura quickstart` command clones a base Hasura project with basic configuration and creates a free tier [Hasura cluster](https://docs.hasura.io/0.15/manual/cluster/index.html). Running a `git push` to the `hasura` remote applies the configuration from the project (here base) to the cluster.

- You will obtain a cluster name after running `hasura quickstart`. Go back to the expo (or vainalla) directory and set this clusterName in `Hasura.js`. Also set `useHasuraApis` to true.

  ```javascript
  const clusterName = "clustername44";
  const useHasuraApis = true;
  ```

- Install node modules and run the app.

  ```bash
  $ npm install
  ```

- Run the app.
  - If you are using Expo,

    ```bash
    $ npm start
    ```

  - If you are using vanilla React Native,

    ```bash
    # For Android
    $ react-native run-android

    # For iOS
    $ react-native run-ios
    ```

> To get started with React Native development using Hasura, head to [hasura/hello-react-native](https://hasura.io/hub/projects/hasura/hello-react-native/) on [Hasura hub](https://hasura.io/hub).

### Without Hasura APIs

You have to configure login methods if you are not using Hasura APIs. Check the [detailed instructions](#detailed-instructions-for-usage) for about configuration.


## Detailed Instructions for Usage

- For using the application with Expo SDK, [click here](https://github.com/hasura/react-native-auth-boilerplate/blob/master/expo)

- For using vanilla react native, [click here](https://github.com/hasura/react-native-auth-boilerplate/blob/master/vanilla)


## Contribute

We will be very glad to receive contributions from the community. Check [issues](https://github.com/hasura/react-native-boilerplate/issues) with the label "help wanted" and submit a pull request.

If you have a bug report or a feature request, please [open an issue](https://github.com/hasura/react-native-boilerplate/issues).


## Gallery

### Login with Username

#### iOS

![iosusername](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/ios/iosusername.jpg)

#### Android

![androidusername](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/android/androidusername.jpg)


### Login with Email

#### iOS

![iosemail](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/ios/iosemail.jpg)

#### Android

![androidemail](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/android/androidemail.jpg)


### Login with OTP

#### iOS

![iosotp](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/ios/iosotp.jpg)

#### Android

![androidotp](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/android/androidotp.jpg)


### Google and Facebook

#### iOS

![iossocial](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/ios/iossocial.jpg)

#### Android

![androidsocial](https://github.com/hasura/react-native-auth-boilerplate/raw/master/readme-assets/android/androidsocial.jpg)
