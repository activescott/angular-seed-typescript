#!/bin/bash



# This should get you from a fresh git clone of the repo to a running app from nothing else.

# Requirements
#####
# The only requirements should be :
# - node
#
# The following requirements will be installed by this script if not already installed:
# - npm
# - bower
# - grunt

command -v npm > /dev/null || { echo >&2 "npm not installed. Install node.js at http://nodejs.org and run this again."; exit 1; }

# npm: Ensure npm dependencies are installed
#  Installs node-related dependencies from npm (typescript, and grunt build tool-related packages are also installed via npm)
#  The actual packages installed are declared in package.json.
npm install
# bower: Ensure bower depdnencies are installed.
#  Installs client-side JavaScript dependencies.
#  Actual dependencies are declared in bower.json
bower install

# tsd: NOTE: Installing TypeScript definition files not really needed. Generally those are to be committed.

# grunt: Grunt is the build tool that runs the build script Gruntfile.js and the with no arguments the default task registered therein.
grunt
