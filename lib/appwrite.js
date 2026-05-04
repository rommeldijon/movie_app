import { Client } from "react-native-appwrite";
import "react-native-url-polyfill/auto";

export const client = new Client()
  .setProject("69ee91d700020899a2f7")
  .setEndpoint("https://sfo.cloud.appwrite.io/v1");