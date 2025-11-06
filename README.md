Deploy Expo

npm i -g eas-cli
npx eas login

!Dentro do Projeto
npx expo install expo-dev-client
npx eas init
npx eas biuld --platform android --profile development
