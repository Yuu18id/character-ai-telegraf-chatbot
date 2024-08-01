# Character AI Telegraf Chatbot


## Intro

Simple telegram chatbot using [node_characterai](https://github.com/realcoloride/node_characterai) and [telegraf](https://github.com/telegraf/telegraf).


## Access Token

1. Open the Character.AI website in your browser on the OLD interface (https://old.character.ai/)
2. Open the URL bar, write `javascript:` (case sensitive) and paste the following:
```javascript
(function(){let e=window.localStorage["char_token"];if(!e){alert("You need to log in first!");return;}let t=JSON.parse(e).value;document.documentElement.innerHTML=`<div><i><p>provided by node_characterai - <a href="https://github.com/realcoloride/node_characterai?tab=readme-ov-file#using-an-access-token">click here for more information</a></p></i><p>Here is your session token:</p><input value="${t}" readonly><p><strong>Do not share this with anyone unless you know what you are doing! This is your personal session token. If stolen or requested by someone you don't trust, they could access your account without your consent; if so, please close the page immediately.</strong></p><button id="copy" onclick="navigator.clipboard.writeText('${t}'); alert('Copied to clipboard!')">Copy session token to clipboard</button><button onclick="window.location.reload();">Refresh the page</button></div>`;localStorageKey=null;storageInformation=null;t=null;})();
```
3. The following page should appear:
![Access_Token_Mobile](https://github.com/realcoloride/node_characterai/assets/108619637/2954586c-5dab-4e1c-820c-4e8528653d14)

4. Click the respective buttons to copy your access token or id token to your clipboard.
---

## Character ID

You can find your character ID in the URL of a Character's chat page. For example, if you go to the chat page of the character `Test Character` you will see the URL `https://character.ai/chat/chat?char=5f7f9b9b9b9b9b9b9b9b9b9b`. The last part of the URL is the character ID:

![Character ID](./assets/charIdExample.png)
