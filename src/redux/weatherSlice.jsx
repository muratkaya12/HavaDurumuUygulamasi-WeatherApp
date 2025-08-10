import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const initialState = {
  days: [],
};

// const URL = 'https://api.openweathermap.org/data/2.5/weather';
const fURL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const getDayName = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", { weekday: "short" });
};

export const getResult = createAsyncThunk(
  "result",
  async (city, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${fURL}?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
      );
      const cityName = response.data.city.name;
      const country = response.data.city.country;

      if (
        cityName.localeCompare(city, "tr", { sensitivity: "base" }) !== 0 &&
        !cityName.toLowerCase().includes(city.toLowerCase())
      ) {
        return rejectWithValue(
          "Geçersiz şehir adı. Lütfen doğru bir şehir girin !"
        );
      }

      const payloads = response.data.list
        .filter((_, index) => index % 8 === 0)
        .map((forecast) => ({
          date: getDayName(forecast.dt_txt),
          city: cityName.split(" ")[0],
          country: country,
          temperature: parseFloat(forecast.main.temp.toFixed(1)),
          weather: forecast.weather[0].description,
          weatherIco: forecast.weather[0].icon,
        }));
      console.log(city);
      console.log(cityName);
      return payloads;
    } catch (error) {
      return rejectWithValue(
        "Geçersiz şehir adı. Lütfen doğru bir şehir girin !"
      );
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    //fonksiyonlar
  },

  extraReducers: (builder) => {
    builder.addCase(getResult.fulfilled, (state, action) => {
      state.days = action.payload;
    });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
