# Below is a GrADS script to generate Heat Index images
# using the NWS standardized color curve.

# Here are the RGB values below

# The gray color section
# Heat Index values range from 40 to 75
'set rgb 21 220 220 220'

# The yellow to orange color section
# Heat Index values range from greater than 75 to 95
'set rgb 22 255 237 160'
'set rgb 23 254 217 118'
'set rgb 24 254 174 42'
'set rgb 25 253 141 60'

# The orange to dark red color section
# Heat Index values range from greater than 95 to 115
'set rgb 26 252 78 42'
'set rgb 27 227 26 28'
'set rgb 28 177 0 38'
'set rgb 29 128 0 38'

# The purple color section
# Heat Index values of greater than 115 to greater than 120
'set rgb 30 89 0 66'
'set rgb 31 40 0 40'

# The NWS legend (levels) for Heat Index
# Values range from greater than 75 to greater than 120
'set clevs 75 80 85 90 95 100 105 110 115 120'

# Setting the colors created above to be used for the image
'set ccols 21 22 23 24 25 26 27 28 29 30 31 31'
