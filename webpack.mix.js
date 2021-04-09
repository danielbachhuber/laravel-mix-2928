const mix = require('laravel-mix');

mix.js('assets/js/app.js', 'assets/dist').vue({ version: 2 });
