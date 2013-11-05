# Get In Rhythm

Starter Kit For Your Training Exercises

## Getting Started

```sh
git clone https://github.com/amesee/get-in-rhythm.git
cd get-in-rhythm
npm install
```

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
* /api/tags

See `fixtures` directory to see exactly what is served.

### Public

You can include any files you feel necessary to to compolete the exercises.
Place them under `public` and reference them directly in your `html`.

### server.js

Remember this is just a starting point. Feel free to modify `server.js`
as much as you need in order to get things set up your way.
