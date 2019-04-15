#!/usr/bin/env bash

# Remove existing production folder
rm -rf ./build/

# Transpile .ts to .js
tsc --sourceMap false
