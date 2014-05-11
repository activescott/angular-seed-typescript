#!/bin/bash



# This should get you from a fresh git clone of the repo to a running app from nothing else.

# Requirements
#####
# The only requirements should be :
# - node (and npm)
#
# In addition declared dependencies in package.json and bower.json, the following requirements will be installed by this script if not already installed:
# - bower
# - grunt
# - TypeScript transpiler
# - tsd and various TypeScript definitions declared in tsd.json

# Ensure that node is installed. If not give the user a friendly message:
echo "Checking for npm..."
command -v npm > /dev/null || { echo >&2 "npm not installed. Install node.js at http://nodejs.org and run this again."; exit 1; }
echo "Checking for npm complete."

# npm: Ensure npm dependencies are installed
#  Installs node-related dependencies from npm (typescript, and grunt build tool-related packages are also installed via npm)
#  The actual packages installed are declared in package.json.
echo "Installing npm packages declared in package.json..."
npm install
echo "Installing npm packages complete."

echo "Checking for bower..."
command -v bower > /dev/null || { echo "Bower not installed. installing..."; npm install -g bower; }
echo "Checking / installing bower complete."

# bower: Ensure bower depdnencies are installed.
#  Installs client-side JavaScript dependencies.
#  Actual dependencies are declared in bower.json
echo "Installing bower packages declared in bower.json..."
bower install
echo "Installing bower packages complete."

# tsd: NOTE: Installing TypeScript definition files not really needed. Generally those are to be committed to the source repo.
echo "Checking for tsd..."
command -v tsd > /dev/null || { echo "tsd not installed. installing..."; npm install -g tsd; }
echo "Checking / installing tsd complete."
tsd update

echo "Checking for grunt..."
command -v grunt > /dev/null || { echo "Grunt not installed. installing..."; npm install -g grunt-cli; }
echo "Checking / installing grunt complete."



# grunt: Grunt is the build tool that runs the build script Gruntfile.js and the with no arguments the default task registered therein.
grunt
