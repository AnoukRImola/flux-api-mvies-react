const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peliculas: [],
			programas: [],
			personas: [],
			peliculaDetalle: [],
			programaDetalle: [],
		},
		actions: {
            //funcion de ejemplo para hacer peticiones fetch
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ demo: data.bar }))
			// 	*/
			// },
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
			loadPeliDetalles: (id) => {

				fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6090b4ce2a41ad46da7767f56682434`)
				.then((response) => response.json())
				.then((data) =>  setStore({peliDetalles: data.results}));
			}
		}
	};
};

export default getState;
