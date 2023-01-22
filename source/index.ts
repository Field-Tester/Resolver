import { config } from "dotenv";
import { resolve } from "path";

// Import .env
config({path: resolve(__dirname, "..", ".env")});

import "./client";
