# short-url-ember

## Table of Contents

- [Description](#description)
- [API Access](#api-access)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running / Development](#running--development)
  * [Running Tests](#running-tests)
  * [Linting](#linting)
  * [Building](#building)

## Description

Ember client for [RoR URL Shortener API](https://github.com/robertosequeira/short.rb)

## API Access

By default this client expects the **API to be accessible at http://localhost:3000**. 
If the API host needs to be changed, the value **can updated at** [environment.js](config/environment.js#L27)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd short-url-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
