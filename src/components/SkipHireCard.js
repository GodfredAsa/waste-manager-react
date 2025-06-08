import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";

const SkipHireCard = ({ hireData }) => {
  const [selected, setSelected] = useState(false);

  const imageUrl =
    "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg";

  const totalCost = (
    hireData.price_before_vat *
    (1 + hireData.vat / 100)
  ).toFixed(2);

  const toggleSelected = () => {
    setSelected((prev) => !prev);
  };

  return (
    <Card
      sx={{ width: 320, borderRadius: 2, boxShadow: 3, cursor: "pointer" }}
      onClick={toggleSelected} 
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={`Skip Size ${hireData.size}`}
          sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            display: "flex",
            gap: 1,
          }}
        >
          {hireData.allowed_on_road && (
            <Chip
              label="On-Road"
              size="small"
              sx={{ bgcolor: "#ffffff", color: "black" }}
            />
          )}
          {hireData.allows_heavy_waste && (
            <Chip
              label="Heavy Waste"
              size="small"
              sx={{ bgcolor: "#ffffff", color: "black" }}
            />
          )}
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            right: 8,
            backgroundColor: "#1e293b",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 600,
            px: 1.5,
            py: 0.5,
            borderRadius: 1.5,
          }}
        >
          {hireData.size} yards
        </Box>
      </Box>

      <CardContent sx={{ pb: 2 }}>
        <Typography
          variant="caption"
          sx={{ color: "text.secondary", textTransform: "uppercase" }}
        >
          Postcode: {hireData.postcode}
        </Typography>

        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 0.5 }}>
          {hireData.size}-Yard Skip
        </Typography>

        <Box
          sx={{
            mt: 0.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{ color: "#e67700" }}
          >
            £ {totalCost}
          </Typography>

          <Button
            variant="outlined"
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              toggleSelected();
            }}
            sx={{
              borderColor: selected ? "#1976d2" : "gray",
              bgcolor: selected ? "#1976d2" : "transparent",
              color: selected ? "#fff" : "gray",
              textTransform: selected ? "uppercase" : "none",
              fontWeight: 600,
              "&:hover": {
                bgcolor: selected ? "#1565c0" : "black",
                color: selected ? "#fff" : "white",
                borderColor: selected ? "#1565c0" : "black",
              },
            }}
          >
            {selected ? "Selected" : "Select"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SkipHireCard;
