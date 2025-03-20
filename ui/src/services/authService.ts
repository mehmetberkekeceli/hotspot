import axios from "axios";
import env from "../environment/env";

const API_URL = `${env.API_BASE_URL}/nvi/validate`;

export const validateUser = async (
  tcKimlikNo: string,
  ad: string,
  soyad: string,
  dogumYili: number
) => {
  try {
    const response = await axios.get(API_URL, {
      params: { tcKimlikNo, ad, soyad, dogumYili },
    });

    if (!response.data) {
      throw new Error("Kimlik doğrulama başarısız!");
    }

    return response.data;
  } catch (error) {
    console.error("Kimlik doğrulama sırasında hata oluştu:", error);
    throw error;
  }
};
