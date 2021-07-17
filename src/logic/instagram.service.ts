import axios from "axios";
import { InstagramUser } from "./models/instagramuser";

export class InstagramService {
  constructor() {
    this.instagramAppId = process.env.VUE_APP_INSTAGRAM_ID;
    this.secret = process.env.VUE_APP_INSTAGRAM_SECRET;
  }
  oauth: any = require("axios-oauth-client");
  instagramAppId: any;
  secret: any;

  public async getToken(code: string): Promise<InstagramUser> {
    const getInstagramtoken = this.oauth.client(axios.create(), {
      url: "https://api.instagram.com/oauth/access_token",
      client_id: process.env.VUE_APP_INSTAGRAM_ID,
      client_secret: process.env.VUE_APP_INSTAGRAM_SECRET,
      redirect_uri: process.env.VUE_APP_INSTAGRAM_REDIRECT_URL,
      code: code,
      grant_type: "authorization_code",
    });

    const result = await getInstagramtoken();
    console.log(result.user_id);
    console.log(result.access_token);
    return new InstagramUser(result.user_id, result.access_token);
  }

  public static authenticate(instagramId: number, redirect_uri: string): void {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${instagramId}&redirect_uri=${redirect_uri}&scope=user_profile,user_media&response_type=code`;

    window.location.replace(authUrl);
  }
}
