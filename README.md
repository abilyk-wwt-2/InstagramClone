![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)
[![image](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/simcoder_here)
[![image](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/simcoder_here/)
[![image](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCQ5xY26cw5Noh6poIE-VBog)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/simcoder)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/SimCoderYoutube/InstagramClone">
    <img src="images/simcoder.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Instagram Clone</h3>

  <p align="center">
    A Instagram clone app made with React Native and firebase
    <br />
    <a href="https://github.com/SimCoderYoutube/InstagramClone/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/SimCoderYoutube/InstagramClone/issues">Report Bug</a>
    ·
    <a href="https://github.com/SimCoderYoutube/InstagramClone/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#firebase-configuration">Firebase configuration</a></li>
        <li><a href="#running-the-frontend">Running the frontend</a></li>
        <li><a href="#running-the-admin-panel">Running the admin panel</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## ℹ️ About The Project

![alt text](images/mockup.png "Title")

This repo contains the project made in my youtube chanel called simcoder. This project is a clone of the Instagram android app.

It is made using React Native with Expo using firebase services (authentication, firestore and storage).
The admin panel is made with ReactJS.
The backend is all NodeJS

In the [master](https://github.com/SimCoderYoutube/InstagramClone/tree/master) branch you have the redesign project which I was previously selling in my website, however you still have access to the youtube series repo in the [youtube_series](https://github.com/SimCoderYoutube/InstagramClone/tree/youtube_series)

You can follow the youtube series in the following [link](https://www.youtube.com/watch?v=xE8UEX7vXVQ&list=PLxabZQCAe5fgatwOQny9wKJVs4YD6xkf1)

## 🆕 Getting Started

- ### **Prerequisites**

  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.dev/)
  - [Firebase](https://firebase.google.com/)
  - [Node.js](https://nodejs.org/) and npm

<!-- GETTING STARTED -->

- ### **Installation**

  In order to deploy the project you'll need to follow the [wiki page](https://github.com/SimCoderYoutube/InstagramClone/wiki/Setup-your-project) dedicated to this effect.

  The repository is split into `frontend/` (Expo mobile app), `admin/` (React admin panel) and `backend/functions/` (Firebase Cloud Functions). Install dependencies separately in each app you want to run:

  ```bash
  cd frontend && npm install
  cd ../admin && npm install
  ```

- ### **Firebase configuration**

  Create a Firebase project with Authentication, Firestore and Storage enabled, add a Web app, and copy its config from the Firebase console. The repository ships `"****"` placeholders, so the apps will not work until you replace them. Do not commit real keys.

  - **Frontend:** the config is inlined as the `firebaseConfig` object in `frontend/App.js` (`apiKey`, `authDomain`, `databaseURL`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`, `measurementId`).
  - **Frontend native builds:** `frontend/app.json` also has `"****"` placeholders (Google Sign-In API key, iOS client id, Maps key) and refers to `./google-services.json` (Android) and `./GoogleService-Info.plist` (iOS). Those two files are not in the repo; download them from the Firebase console into `frontend/` if you build native apps.
  - **Admin panel:** the same object lives in `admin/src/config/config.js` and is loaded by `admin/src/index.js`.
  - **Security rules:** `firestore_rules.txt` and `storage_rules.txt` in the repo root are copies to paste into the Firebase console (Firestore Database → Rules, Storage → Rules).
  - **Cloud Functions:** `backend/functions/index.js` holds the Firestore triggers (likes, followers, comments). It has no `package.json` or deploy config; it needs `firebase-functions` and `firebase-admin` and must be deployed with the Firebase CLI.

- ### **Running the frontend**

  ```bash
  cd frontend
  npm start          # expo start; scan the QR code with Expo Go
  npm run android    # expo start --android
  npm run ios        # expo start --ios
  npm run web        # expo start --web
  ```

  The frontend has no build, lint or test scripts.

- ### **Running the admin panel**

  ```bash
  cd admin
  npm start          # http://localhost:3000
  npm run build      # production build in admin/build
  npm test           # react-scripts test (watch mode)
  ```

## 🚧 Roadmap

See the [open issues](https://github.com/SimCoderYoutube/InstagramClone/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## ➕ Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Please check the [Wiki](https://github.com/SimCoderYoutube/InstagramClone/wiki/How-to-Contribute)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

And don't forget to subscribe to the [youtube chanel](https://www.youtube.com/c/SimpleCoder?sub_confirmation=1)

## 📝 License

Copyright © 2021 [SimCoder](https://github.com/simcoderYoutube).

This project is [Apache License 2.0](https://github.com/SimCoderYoutube/InstagramClone/blob/master/LICENSE) licensed. Some of the dependencies are licensed differently.

<!-- CONTACT -->

## 👤 Contact

**SimCoder**

- Website: www.simcoder.com
- Twitter: [@simcoder_here](https://twitter.com/simcoder_here)
- Github: [@simcoderYoutube](https://github.com/simcoderYoutube)
- Youtube: [SimCoder](https://www.youtube.com/channel/UCQ5xY26cw5Noh6poIE-VBog)
