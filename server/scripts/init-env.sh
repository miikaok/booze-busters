#!/bin/sh

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# This statement validates the installation of node.js on the system. Node.js is required for the environment to run, and node.js provides npm (node package manager) by default.
echo "Check for a valid node.js installation..."
if command -v "node" >/dev/null 2>&1; then
  echo "${GREEN}Node.js is installed on your system!${NC}"
else
  echo "${RED}You don't have node.js installed on your system. Please install node.js 16.14+ on your system before running this script!${NC}"
  exit 1
fi

# This statement validates the installation of npm. Npm is required to install pnmp.
echo "Check for a valid npm installation..."
if command -v "npm" >/dev/null 2>&1; then
  echo "${GREEN}Npm is installed on your system!${NC}"
else
  echo "${RED}You don't have npm installed on your system. Please install node.js 16.14+ on your system before running this script!${NC}"
fi

# This statement validates the installation of pnmp and will attempt to install it if it is not installed on the system.
echo "Check for a valid pnpm installation..."
if command -v "pnpm" >/dev/null 2>&1; then
  echo "${GREEN}Pnmp is installed on your system!${NC}"
else
  echo "${RED}You do not have pnpm installed on your system. Please install pnpm on your system before running this script!${NC}"
  exit 1
fi

echo "Proceeding to install required node modules..."

# This statement will install all the required node modules from the npm repository using pnpm.
if pnpm i; then
  echo "${GREEN}Node modules were installed succesfully!${NC}"
else
  echo "${RED}Failed to install required node modules, please try to install them manually using pnmp!${NC}"
  exit 1
fi

echo "Copying enviroment variables..."

# Copy the .env.example and set the name to .env
cp .env.example .env

echo "Done"

echo "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓"
echo "┃ You have successfully installed the development environment for this project! ┃"
echo "┃          Thank you very much for your contribution to the project!            ┃"
echo "┃                   https://github.com/miikaok/booze-busters                    ┃"
echo "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"

exit 0