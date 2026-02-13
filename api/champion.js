export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": "RGAPI-c7c72e1d-5c9a-4468-86a8-1b395f8240d7"
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "API error" });
  }
}
