require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/fbi-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/fbi-roll-a-die", async ({ command, ack, respond }) => {
    await ack();
    const dieRoll = Math.floor(Math.random() * 6) + 1;
    await respond({ text: `You rolled a ${dieRoll}!` });
    }
);

(async () => {
  await app.start();
  console.log("bot is running!");
})();

