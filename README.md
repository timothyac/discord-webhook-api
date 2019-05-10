# discord-webhook-api

[![NPM](https://nodei.co/npm/discord-webhook-api.png)](https://www.npmjs.com/package/discord-webhook-api)

### How to install

`npm install discord-webhook-api --save`

### Usage

discord-webhook-api will create a rich embed for you and then send it to webhook you provide.

`.addTitle(title)` will add a title to your embed.

`.addImageUrl(imageUrl)` will add a image to your embed.

`.addFooter(footer)` will add a footer to your embed. If nothing is specified then it will default to 'Discord Webhook API'.

`.addTimestamp()` will add a timestamp.

`.addColor(color)` lets you pick a color for the embed.

`.addDescription(description)` is the main body for your embed.

`.sendTo(webhookUrl)` this is where you add the webhook URL from discord.

### Example

```javascript
const webhookHandler = require("discord-webhook-api");

const newWebhook = new webhookHandler();

newWebhook
  .addTitle("Test title")
  .addDescription("Test description")
  .addImageUrl("https://pbs.twimg.com/media/D6KdDkWXkAIWaLO.jpg")
  .addColor("#F00000")
  .addTimestamp()
  .sendTo(
    "https://discordapp.com/api/webhooks/123456789/1a2s3d4f5g6h5j-i9p8o7i6u5y4t"
  );
```

![image](https://imgur.com/VrkkEDa)

## License

discord-webhook-api is licensed under [MIT License](https://github.com/SunstroUS/discord-webhook-api/blob/master/LICENSE).
