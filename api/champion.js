// .env dosyasını okumak için
require("dotenv").config();

// Key artık env'den geliyor
const RIOT_API_KEY = process.env.RIOT_API_KEY;

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "API error" });
  }
}
