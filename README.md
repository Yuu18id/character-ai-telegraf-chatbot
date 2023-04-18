# Character AI Telegraf Chatbot


## Intro

Simple telegram chatbot using `node-characterai` and `telegraf`.


## Access Token

This package requires a valid session token from Character AI. You can get one by logging in to your Character AI account and copying the value of the `accessToken` in the `localStorage` of your browser.

1. Open the Character AI website in your browser
2. Open the developer tools `F12` and go to the `Application` tab.
3. Go to the `Storage` section and click on `Local Storage`.
4. Look for the `@@auth0spajs@@::dyD3gE281MqgISG7FuIXYhL2WEknqZzv::https://auth0.character.ai/::openid profile email offline_access` key.
5. Open the body and copy the access token.

![Access Token](./assets/accessTokenExample.png)

## Character ID

You can find your character ID in the URL of a Character's chat page. For example, if you go to the chat page of the character `Test Character` you will see the URL `https://character.ai/chat/chat?char=5f7f9b9b9b9b9b9b9b9b9b9b`. The last part of the URL is the character ID:

![Character ID](./assets/charIdExample.png)
