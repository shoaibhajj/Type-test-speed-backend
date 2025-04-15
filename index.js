const express = require("express");
const cors = require("cors");
const { getWordsList } = require("most-common-words-by-language");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/words", (req, res) => {
  const language = req.query.language || "english";
  const count = parseInt(req.query.count) || 10000;

  try {
    const words = getWordsList(language, count);
    res.json({ language, count, words });
  } catch (error) {
    res.status(400).json({ error: "Invalid language or count" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
