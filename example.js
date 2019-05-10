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
