#!/bin/bash

cd library
npm i
npm run build
cd ../client
npm i
cd ..