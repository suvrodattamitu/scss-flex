let mix = require('laravel-mix');

mix.setPublicPath('public');
mix.setResourceRoot('../');

mix.sass('scss/app.scss', 'css/app.css');
