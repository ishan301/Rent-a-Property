import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function Property(property:any) {
    
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 200, width:450 }}
        image={property.image}
        title={property.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#1976d2"}}>
          <strong>${property.price}</strong><span style={{fontWeight:"lighter", fontSize:"small"}}>/month</span>
        </Typography>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bolder">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.location}
        </Typography>
      </CardContent>
    </Card>
  )
}
