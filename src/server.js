import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default {
  async post(url, value) {
    const { data } = await axios.post(`${url}.json`, value)
    return data.name
  },

  async get(url) {
    const { data } = await axios.get(`${url}.json`)
    return data
  },

  async put(url, idx, value) {
    await axios.put(`${url}/${idx}.json`, value)
  },

  async delete(url, idx) {
    await axios.delete(`${url}/${idx}.json`)
  },
}
