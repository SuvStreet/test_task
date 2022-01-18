import axios from 'axios'

// axios.defaults.baseURL = process.env.VUE_APP_OTHER_URL
axios.defaults.baseURL = 'http://localhost:3000'

export default {
  async post(url, value) {
    const { data } = await axios.post(`${url}`, value)
    return data.name
  },

  async get(url) {
    const { data } = await axios.get(`${url}`)
    return data
  },

  async put(url, idx, value) {
    await axios.put(`${url}/${idx}`, value)
  },

  async delete(url, idx) {
    await axios.delete(`${url}/${idx}`)
  },
}
