"use client";
import { properties, locations, propertyTypes } from "./data";
import Navbar from "./components/Navbar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Slider from "@mui/material/Slider";
import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Property from "./components/Property";

export default function Home() {
  const [priceRange, setPriceRange] = React.useState<number[]>([500, 2500]);
  const changePrice = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };
  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "10em", marginRight: "10em" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Search Properties to Rent</h1>
          <TextField
            id="name-search"
            placeholder="Seach Properties..."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            style={{ backgroundColor: "white", height: "56px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            padding: "2em",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Autocomplete
              disablePortal
              id="location-picker"
              options={locations}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Location" />
              )}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Select Move-in Date" />
            </LocalizationProvider>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 200,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "2em",
                marginRight: "2em",
              }}
            >
              <Typography id="price-range-slider" gutterBottom>
                Price Range
              </Typography>
              <Typography fontWeight="bold">
                ${priceRange[0]} - ${priceRange[1]}
              </Typography>
              <Slider
                value={priceRange}
                onChange={changePrice}
                valueLabelDisplay="auto"
                getAriaLabel={() => "price-range-slider"}
                min={0}
                max={8000}
              />
            </div>
            <Autocomplete
              disablePortal
              id="property-type-picker"
              options={propertyTypes}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Property Type" />
              )}
            />
          </div>
          <div>
            <Button variant="contained" size="large">
              Search
            </Button>
          </div>
        </div>
        <div style={{ padding: "2em" }}>
          <Grid container spacing={2}>
            {properties.map((property) => (
              <Grid item xs={4} key={property.id}>
                <Property {...property} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
