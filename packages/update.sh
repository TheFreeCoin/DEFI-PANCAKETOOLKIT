#!/bin/bash

cd pancake-uikit
yarn build
rm -r ../../../fork-frontend/node_modules/'@pancakefork'/uikit/dist
cp -r dist ../../../fork-frontend/node_modules/'@pancakefork'/uikit/dist