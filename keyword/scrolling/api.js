import { API } from "./config.js";

export async function fetchRandomCats(page) {
  try {
    const response = await fetch(
      `${API.API_BASE_URL}/images/search?limit=10&page=${page}`,
      {
        header: {
          "x-api-key": API.X_API_KEY
        }
      }
    );
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    alert(e.message);
    console.error(e);
  }
}
