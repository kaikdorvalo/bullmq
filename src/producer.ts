import { Queue } from "bullmq";
import { redisConfig } from "./config/redis";

const queue = new Queue("types", { connection: redisConfig });

async function addTypes() {
    await queue.add("scrum_master", { name: "Paulão", department: "IT" });
    await queue.add("manager", { name: "Jacinto", department: "HR" });
    await queue.add("product_owner", { name: "Marcão", department: "IT" });
}

addTypes();