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
  const [priceRange, setPriceRange] = React.useState<number[]>([500, 7000]);
  const [location, setLocation] = React.useState<string | null>(null);
  const [propertyType, setPropertyType] = React.useState<string | null>(null);
  const changePrice = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };
  const [query, setQuery] = React.useState("");
  const search = (data: any, filter: boolean) => {
    return data.filter((item: any) => {
      const searchFilter =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.location.toLowerCase().includes(query.toLowerCase()) ||
        item.property_type.toLowerCase().includes(query.toLowerCase());
      if (filter) {
        const locationFilter =
          location != null ? item.location == location : true;
        const propertyTypeFilter =
          propertyType != null ? item.property_type == propertyType : true;
        const priceFilter =
          item.price <= priceRange[1] && item.price >= priceRange[0];
        return (
          searchFilter && locationFilter && propertyTypeFilter && priceFilter
        );
      } else return searchFilter;
    });
  };
  const [Data, setData] = React.useState(search(properties, false));

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
            onChange={(event) => {
              setQuery(event.target.value);
              setData(search(Data, false));
            }}
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
              onChange={(event, newValue) => {
                newValue ? setLocation(newValue.label) : setLocation(null);
              }}
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
              onChange={(event, newValue) => {
                newValue
                  ? setPropertyType(newValue.label)
                  : setPropertyType(null);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Property Type" />
              )}
            />
          </div>
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setData(search(properties, true));
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div style={{ padding: "2em" }}>
          
          {Data.length>0?<Grid container spacing={2}>
            {Data.map((property: any) => (
              <Grid item xs={4} key={property.id}>
                <Property {...property} />
              </Grid>
            ))}
          </Grid>:<h4 style={{textAlign:"center"}}> No matching results found. </h4>}
        </div>
      </div>
    </div>
  );
}
