# Below is a GrADS script to generate wind speed images
# using the NWS standardized color curve

# Here are the RGB values below

# The blue color section
# Wind speed values range from less than 4 kts (5 mph) to 22 kts (25 mph)
'set rgb 20 16 63 120'
'set rgb 21 34 94 168'
'set rgb 22 29 145 192'
'set rgb 23 65 182 196'
'set rgb 24 127 205 187'

# The green to yellow color section
# Wind speed values range from greater than 22 kts (25 mph) to 43 kts (50 mph)
'set rgb 25 180 215 158'
'set rgb 26 223 255 158'
'set rgb 27 255 255 166'
'set rgb 28 255 232 115'
'set rgb 29 255 196 0'

# The orange to red color section
# Wind speed values range from greater than 43 kts (50 mph) to 104 kts (120 mph)
'set rgb 30 255 170 0'
'set rgb 31 255 89 0'
'set rgb 32 255 0 0'
'set rgb 33 168 0 0'
'set rgb 34 110 0 0'

# The pink color section
# Wind speed values range from greater than 104 kts (120 mph) to greater than 122 kts (140 mph)
'set rgb 35 255 190 232'
'set rgb 36 255 115 223'

# The NWS legend (levels) in knots
# Values range from less than 4 knots to greater than 122 knots
'set clevs 4 9 13 17 22 26 30 35 39 43 52 61 70 87 104 122'

# The NWS legend (levels) in mph, must uncomment to use as default is for knots
# Values range from less than 5 mph to greater than 140 mph
#'set clevs 5 10 15 20 25 30 35 40 45 50 60 70 80 90 100 120 140'

# Setting the colors created above to be used for the image
'set ccols 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 36'     
