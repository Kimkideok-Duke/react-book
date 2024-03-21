import axios from "axios";

const SearchBooks = async (query) => {
    const KAKAO_API_KEY = 'KakaoAK 36c62f2c0ceacd4973d5eb90407ccad1'; // 여기에 발급받은 API 키를 넣어주세요
    try {
        const response = await axios.get('https://dapi.kakao.com/v3/search/book', {
          headers: {
            Authorization: KAKAO_API_KEY,
          },
          params: {
            query,
          },
        });
        return response.data.documents;
      } catch (error) {   
        console.error('Error searching books:', error);
        throw error; // 에러를 호출자에게 다시 전달
      };
};

export default SearchBooks;