# ClubSynapsETS.github.io


[![Build Status](https://travis-ci.org/ClubSynapsETS/ClubSynapsETS.github.io.svg?branch=production)](https://travis-ci.org/ClubSynapsETS/ClubSynapsETS.github.io)

## Website
http://ClubSynapsETS.github.io

### The website is build with

* https://vuepress.vuejs.org/
* https://travis-ci.org/

## Development

### Local installation

`yarn install`

### Serve local development
`npx vuepress dev docs` or `yarn docs:dev`

### How to deploy

- Commit a change in the branch `production` and travis-ci will build the site and deploy it.
- The deployed website resides in the branch `master`