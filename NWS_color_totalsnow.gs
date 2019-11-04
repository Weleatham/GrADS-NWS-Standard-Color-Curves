# Below is a GrADS script to generate total snowfall accumulation images 
# using the NWS standardized color curve. 
# Please use NWS_seasonal_color_totalsnow.gs if you need a map for 
# amounts greater than 36 inches.

# Here are the RGB values below

# The blue color section
# Snowfall amounts range from less than 1 inch to 6 inches
'set rgb 20 189 215 231'
'set rgb 21 107 174 214'
'set rgb 22 49 130 189'
'set rgb 23 8 81 156' 
'set rgb 24 8 38 148'

# The yellow color section
# Snowfall amounts range from greater than 6 inches to 18 inches
'set rgb 25 255 255 150'
'set rgb 26 255 196 0'
'set rgb 27 255 135 0'

# The red color section
# Snowfall amounts range from greater than 18 inches to greater than 36 inches
'set rgb 28 219 20 0'
'set rgb 29 158 0 0'
'set rgb 30 105 0 0'
'set rgb 31 43 0 46'

# The NWS legend (levels) in inches
# Values range from 0 inches to greater than 36 inches
'set clevs 0.1 1 2 3 4 6 8 12 18 24 30 36 48'

# Setting the colors created above to be used for the image
'set ccols 0 20 21 22 23 24 25 26 27 28 29 30 31 31'
