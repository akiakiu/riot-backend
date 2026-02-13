export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: {
          "X-Riot-Token": process.env.RGAPI-edd7e740-35e3-4ebe-bd41-f614f8ba94ad
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "API error" });
  }
}
