const Discord = require("discord.js");

let embed = new Discord.RichEmbed().setFooter("Discord Webhook API");

class webhookHandler {
  constructor() {}

  addTitle(title) {
    // Check for webhook title
    if (!title) throw new Error("Missing title");
    embed.setAuthor(title);
    return this;
  }

  addImageUrl(imageUrl) {
    // Check for webhook imageUrl
    if (!imageUrl) throw new Error("Missing image url");
    embed.setImage(imageUrl);
    return this;
  }

  addFooter(footer) {
    // Check for webhook footer
    if (!footer) throw new Error("Missing footer");
    embed.setFooter(footer);
    return this;
  }

  addTimestamp() {
    // Add a timestamp to the webhook footer
    embed.setTimestamp();
    return this;
  }

  addColor(color) {
    // Check for webhook color
    if (!color) throw new Error("Missing color");
    embed.setColor(color);
    return this;
  }

  addDescription(description) {
    // Check for webhook description
    if (!description) throw new Error("Missing description");
    embed.setDescription(description);
    return this;
  }

  sendTo(webhookUrl) {
    // Check for webhook url
    if (!webhookUrl) throw new Error("Missing webhook");
    // Parse webhook url
    const tokenAndID = webhookUrl.slice(36).split("/");
    // Create new client
    const client = new Discord.WebhookClient(tokenAndID[0], tokenAndID[1]);
    // Send to discord
    try {
      client.send(embed);
    } catch (err) {
      throw new Error(err);
    }
    console.log(`Sent webhook to: ${webhookUrl}`);
    return this;
  }
}

module.exports = webhookHandler;
