const newModul = require('./main');

const newModulInstanse = new newModul();

newModulInstanse.hello();
newModulInstanse.goodbye();

// Браузер ничего не знает о наших ипортах и require. Нужен сборщик
/*

npm init -y
npm i webpack webpack- cli --save-dev
npx-webpacka


*/