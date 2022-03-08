import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

let baseQuery = {
  api_key: 'cIPDqqSXtKGj7uhEEgZCgk71cXQP7pKfXWAAMWJc',
  date: ''
}
class PicturesService {
  async getPicture(inputDate) {
    baseQuery.date = inputDate
    const res = await api.get('', { params: baseQuery })
    logger.log(res.data)
    AppState.currentPicture = res.data

  }
}

export const picturesService = new PicturesService()