import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import {ApiKey} from '../../api/MoviApiKey';
import MovieApi from '../../api/MoviApi';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (term) => {
  
    const response = await MovieApi.get(`http://www.omdbapi.com/?apiKey=${ApiKey}&s=${term}&type=movie`)
  
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async (term) => {
   
    const response = await MovieApi.get(`http://www.omdbapi.com/?apiKey=${ApiKey}&s=${term}&type=series`)
           
    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async (id) => {

    const response = await MovieApi.get(`http://www.omdbapi.com/?apiKey=${ApiKey}&i=${id}&Plot=full`)
           
    return response.data;
})

const initialState = {
    movies : {},
    shows : {},
    selectedMovieOrShow : {},
}

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
        removeSelectedMovieOrShow : (state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers : {
        [fetchAsyncMovies.pending] : () => {
            console.log("Pending!");
        },
        [fetchAsyncMovies.fulfilled] : (state,{payload}) => {
            console.log("Fetched sucessfully!");
            return {...state,movies : payload}
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log("rejected!");
        },
        [fetchAsyncShows.fulfilled] : (state,{payload}) => {
            console.log("Fetched sucessfully!");
            return {...state,shows : payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state,{payload}) => {
            console.log("Fetched sucessfully!");
            return {...state,selectedMovieOrShow : payload}
        },
    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;