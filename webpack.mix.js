const mix = require('laravel-mix');

require('laravel-mix-tailwind');

mix.js('assets/js/app.js', 'assets/dist').vue({ version: 2 });

mix.tailwind('./tailwind.config.js');
