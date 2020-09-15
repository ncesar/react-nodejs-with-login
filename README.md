## Overview

This is a simple ReactJS + NodeJS project made with the current functionalities:

1. Login/logout based on an endpoint
2. Realtime map with markers based on endpoint item localization
3. Context API
4. React Router DOM

I had an external backend with authentication working and I had to make a login handler and also only show api items if the user was authenticated.

See live at: https://pegaki.ncesar.com

Since this API is not hosted by me, it can be offline by the time you enter here to take a look but the code is always here so go check it out :)

Check the documentation at: https://ncesar.github.io/pegaki

## How to run

1. Change both .envtemplate to .env from server and client folder and type the API url.
2. Run `npm run dev` in the root folder and it will run both server and client with `concurrently`.
3. Enjoy 😊
