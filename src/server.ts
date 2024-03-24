import express from "express";
import { getPayLoadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000

const start = async () => {
  const payload = await getPayLoadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL${cms.getAdminURL()}`);
      },
    },
  });

//   nextHandler(req, res)

app.use((req, res)=> nextHandler(req, res))
nextApp.prepare().then(()=>{
    // payload.logger.info('Next.js started')
    app.listen(PORT, async()=>{
        // payload.logger.info(
        //     `Next.js App URL:${process.env.NEXT_PUBLIC_SERVER_URL}`
        // )
    })
})
};

start();