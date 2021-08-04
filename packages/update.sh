#!/bin/bash

cd pancake-uikit
yarn build
rm -r ../../../pancake-frontend/node_modules/'@pancakefork'/uikit/dist
cp -r dist ../../../pancake-frontend/node_modules/'@pancakefork'/uikit/dist