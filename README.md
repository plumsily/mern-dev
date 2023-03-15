<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://todos.cyclic.app/">
    <img src="frontend/public/android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Full-Stack Todo App</h3>

  <p align="center">
    A full-stack project using MERN - MongoDB, Express, React, Node.
    <br />
    <a href="https://github.com/plumsily/mern-todo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://todos.cyclic.app/">View Demo</a>
    ·
    <a href="https://github.com/plumsily/mern-todo/issues">Report Bug</a>
    ·
    <a href="https://github.com/plumsily/mern-todo/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!--<li><a href="#roadmap">Roadmap</a></li>-->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Todos App Screen Shot][product-screenshot]](frontend/public/android-chrome-192x192.png)

This project provides a simple and lightweight service to store tasks in a list on a MongoDB databse. User authentication is enabled using JSON Web Tokens, with user protected routes on the backend. This app contains both the backend, built with Express, and the frontend, built with Create-React-App and the Redux add-on. The server for this app is hosted on Cyclic, where all the static files and API endpoints are served.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![Redux][redux]][redux-url]
- [![React Router][react-router]][react-router-url]
- [![node.js]][node-url]
- [![express]][express-url]
- [![mongodb]][mongodb-url]
- [![jwt]][jwt-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/plumsily/mern-todo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file
4. Enter your API keys and local environment variables in `.env`
   ```js
   NODE_ENV = development
   PORT = 5000
   MONGO_URI = ""
   JWT_SECRET = ""
   ```
5. Run the dev server from the root
   ```sh
   npm run dev
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

As a registered user, you can add, complete, and delete tasks on your list. Completed todos will be grayed out until toggled incomplete or deleted. Using JWT and localStorage, your session will be preserved until you manually logout. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

<!--
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/plumsily/mern-todo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->
<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Justin Lee - [@plumsily](https://twitter.com/plumsily) - plumsylee@gmail.com

Project Link: [https://github.com/plumsily/mern-todo](https://github.com/plumsily/mern-todo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []() Traversy Media

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/plumsily/mern-todo.svg?style=for-the-badge
[contributors-url]: https://github.com/plumsily/mern-todo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/plumsily/mern-todo.svg?style=for-the-badge
[forks-url]: https://github.com/plumsily/mern-todo/network/members
[stars-shield]: https://img.shields.io/github/stars/plumsily/mern-todo.svg?style=for-the-badge
[stars-url]: https://github.com/plumsily/mern-todo/stargazers
[issues-shield]: https://img.shields.io/github/issues/plumsily/mern-todo.svg?style=for-the-badge
[issues-url]: https://github.com/plumsily/mern-todo/issues
[license-shield]: https://img.shields.io/github/license/plumsily/mern-todo.svg?style=for-the-badge
[license-url]: https://github.com/plumsily/mern-todo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/justinsangwonlee
[product-screenshot]: frontend/public/android-chrome-192x192.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
[express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[express-url]: https://expressjs.com/
[redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux.js.org/
[react-router]: 	https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactjs.org/
[mongodb]: 		https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[jwt]: 		https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink
[jwt-url]: https://jwt.io/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com

