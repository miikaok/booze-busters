#!/bin/sh

if command -v "pnpm" >/dev/null 2>&1; then
  echo "Since pnpm exists on the system, it is used as the default package manager."
  pnpm install --silent
else
  echo "Since pnpm is not installed on the current system, use npm as a fallback."
  npm install --silent
fi

cp .env.example .env