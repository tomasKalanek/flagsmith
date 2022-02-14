// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Pusher = require("pusher");
import env from "../../util/env";
const pusher = new Pusher({
  appId: env.pusherappid,
  key: env.pusherkey,
  secret: env.pushersecret,
  cluster: env.pushercluster,
  useTLS: env.pushertls
});

export default function handler(req, res) {
  pusher.trigger("flagsmith", "webhook", {})
      .then(()=>{res.status(200).json({ name: 'John Doe' })})
      .catch((e)=>{res.status(500).json({ e:e, name: 'John Doe' })})
}


