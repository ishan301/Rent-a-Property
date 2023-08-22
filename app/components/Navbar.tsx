import { Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';


export default function Navbar() {
  return (
    <div style={{display:"flex", padding:'2em'}}>
        
        <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
      
              fontWeight: 800,
              fontSize:'large',
              letterSpacing: '.1rem',
              color: '#0068d3',
              textDecoration: 'none',
            }}
          >
            <HomeIcon color="primary" fontSize="large" sx={{position:'relative', top:'-5px', mr:.5}}/>
            Rent A Property
          </Typography>
    </div>
  )
}
