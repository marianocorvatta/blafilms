const AppServices = {
	getFilmsByName: async (filmName,page) => {
    console.log(`AppServices.getFilmsByName(${filmName}-${page})`);    
    const url = `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${filmName}&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};

export default AppServices;