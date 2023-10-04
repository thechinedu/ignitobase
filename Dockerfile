# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=18.16.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]
COPY ["./apps/ignito/package.json", "./apps/ignito/"]
COPY ["./apps/ignitoDB/package.json", "./apps/ignitoDB/"]
COPY ["./apps/frontend/package.json", "./apps/frontend/"]
COPY ["./packages/eslint-config-custom/package.json", "./packages/eslint-config-custom/"]
COPY ["./packages/tsconfig/package.json", "./packages/tsconfig/"]
COPY ["./packages/ui/package.json", "./packages/ui/"]

RUN yarn install 

# Copy the rest of the source files into the image.
COPY . .

# Run the application.
CMD yarn dev
