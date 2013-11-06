# Get In Rhythm

Boilerplate Application for InRhythm Exercises

## Prerequisites

You will need the following already installed:

* [node][]
* [bower][]
* [ruby][]
* [sass][]

[node]: http://nodejs.org/
[bower]: https://github.com/bower/bower
[ruby]: https://www.ruby-lang.org/en/downloads/
[sass]: http://sass-lang.com/install

## Getting Started

Log into your github account and fork this repository. Then clone the fork to
your local development machine and install the packages.

```sh
git clone https://github.com/<your-github-username>/get-in-rhythm.git
cd get-in-rhythm
npm install
```

Don't forget to push your commits as you progress.

## Where To Create Files

View Templates, SCSS and other assets can be placed in the following
directories:

### View Templates

`server.js` already sets up handlebars as the view engine but you can change it
to the engine of your choice. Default view directory is `views`.

You can also place `html` files in `public` and serve them directly.

### SCSS

Sass and Scss files may be placed in any subdirectory in `views`. Compiled css
files will get placed in `build`.

If you place scss files in `views/css`, for example:

    views/css/style.scss
    views/css/more.scss

Then in you html/hbs file you can include them with:

    <link rel='stylesheet' href='/css/style.css'>
    <link rel='stylesheet' href='/css/more.css'>

You can also place `css` files in `public` and serve them directly.

### Other Assets

Bower.js is already set up to include various libraries in
`public/components`. You can include them with:

    <link rel='stylesheet' href='/components/bootstrap/dist/css/bootstrap.css'>

    <script src='/components/underscore/underscore.js'></script>

And so on.

### API

JSON API endpoints are available at:

* /api/featureds
* /api/blogs
* /api/locations
* /api/locations?page=2
* /api/tags

See `fixtures` directory.

### Public

You can include any files you feel necessary to to compolete the exercises.
Place them under `public` and reference them directly in your `html`.

### server.js

Remember this is just a starting point. Feel free to modify `server.js`
as much as you need in order to get things set up your way.
