import axios from "axios";

// Base URL of your backend API
const BASE_URL = "http://localhost:5237/api/character";

const characterService = {
  // Get all characters
  async getAll() {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching characters:", error);
      throw error;
    }
  },

  // Get a character by ID
  async getById(id) {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching character with id ${id}:`, error);
      throw error;
    }
  },

  // Get characters by living status (true/false)
  async getByLivingStatus(isLiving) {
    try {
      const response = await axios.get(`${BASE_URL}/status/${isLiving}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching characters by status ${isLiving}:`, error);
      throw error;
    }
  },

  // Add a new character
  async addcharacter(character) {
    try {
      const response = await axios.post(BASE_URL, character);
      return response.data;
    } catch (error) {
      console.error("Error adding character:", error);
      throw error;
    }
  },
  async updatecharacter(id, updatedcharacter) {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, updatedcharacter);
      return response.data;
    } catch (error) {
      console.error(`Error updating character with id ${id}:`, error);
      throw error;
    }
  },
    async deletecharacter(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      console.log(`character with id ${id} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting character with id ${id}:`, error);
      throw error;
    }
  },
};

export default characterService;
