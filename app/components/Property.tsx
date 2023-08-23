import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import dayjs from "dayjs";

export default function Property(property: any) {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 200, width: 450 }}
        image={property.image}
        title={property.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#1976d2" }}
        >
          <strong>${property.price}</strong>
          <span style={{ fontWeight: "lighter", fontSize: "small" }}>
            /month
          </span>
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight="bolder"
        >
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
        <Typography variant="body1" component="div">
          Move-In Date:{" "}
          <span style={{ color: "#1976d2" }}>
            {dayjs(property.move_in_date).format("DD/MM/YYYY").toString()}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
