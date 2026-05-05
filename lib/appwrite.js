import { Client } from "react-native-appwrite";
import "react-native-url-polyfill/auto";

export const client = new Client()
  .setProject("69fa139d002c740043da")
  .setEndpoint("https://sfo.cloud.appwrite.io/v1");