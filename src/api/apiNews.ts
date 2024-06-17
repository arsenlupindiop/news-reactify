import axios from "axios";
import { NewsApiResponse, ParamsType } from "../interfaces";
const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY=import.meta.env.VITE_NEWS_API_KEY;
import { CategoriesApiResponse } from "../interfaces";

export const getNews = async (params?: ParamsType): Promise<NewsApiResponse> => {
    try {
	const { keywords, page_number, page_size, category } = params || {};
     const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
				params: {
					apiKey: API_KEY,
					keywords,
					page_number,
					page_size,
                    category
				},
			})
     return response.data;
    } catch (error) {
        console.log(error);
		return {
			news: [],
			page: 1,
			status: "error"
		}
    }
}
export const getLatestNews = async (): Promise<NewsApiResponse> => {
	try {
		const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY,
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
		return {
			news: [],
			page: 1,
			status: 'error',
		}
	}
}

export const getCategories = async (): Promise<CategoriesApiResponse> => {
	try {
		const response = await axios.get<CategoriesApiResponse>(
			`${BASE_URL}available/categories`,
			{
				params: {
					apiKey: API_KEY,
				},
			}
		)
		return response.data
	} catch (error) {
		console.log(error)
		return {
			categories: [],
			description: '',
			status: 'error',
		}
	}
}