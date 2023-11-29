import axios from "axios";

export const retrievBrands = async (
): Promise<any> => {
  try {
    const results = await axios.get(
      `${process.env.REACT_APP_BRANDS_API}`,
      {},
    );
    return results.data.brands;
  } catch (error) {
    console.log("FAILED TO GET BRANDS : ", error);
    throw error;
  }
};
