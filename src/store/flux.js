const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peliculas: [],
			programas: [],
			personas: [],
			proximas: [],
			populares: [],
			calificacion: [],
			favoritos: []
		},
		actions: {
			loadPeliculas: () => {
                
					fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
					.then((response) => response.json())
					.then((data) =>  setStore({peliculas: data.results}));
			},
			loadProgramas: () => {

				fetch('https://api.themoviedb.org/3/tv/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
				.then((response) => response.json())
				.then((data) =>  setStore({programas: data.results}));
			},
			loadPersonas: () => {

				fetch('https://api.themoviedb.org/3/person/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
				.then((response) => response.json())
				.then((data) =>  setStore({personas: data.results}));
			},
			loadProximas: () => {

				fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d6090b4ce2a41ad46da7767f56682434&language=en-US&page=1`)
				.then((response) => response.json())
				.then((data) =>  setStore({proximas: data.results}));
			},
			loadPopulares: () => {

				fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434&language=en-US&page=1`)
				.then((response) => response.json())
				.then((data) =>  setStore({populares: data.results}));
			},
			loadCalificacion: () =>{

				fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d6090b4ce2a41ad46da7767f56682434&language=en-US&page=1`)
				.then((response) => response.json())
				.then((data) =>  setStore({calificacion: data.results}));
			},
			addFavoritos: favorito => {
				setStore({
					favoritos: getStore().favoritos.concat(favorito)
				});
			}
			// removFavoritos: favorito => {
			// 	setStore({
			// 		favoritos: getStore().favoritos.filter((item , index) {
			// 			if (favorito.id !== item.id) {
			// 				return item;
			// 			}
			// 		})
			// 	});
			// }
		}
	};
};

export default getState;
