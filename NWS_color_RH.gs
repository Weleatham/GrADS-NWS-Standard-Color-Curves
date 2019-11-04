# Below is a GrADS script to generate relative humidity images
# using the NWS standardized color curve.

# Here are the RGB values below

# The red to yellow color section
# RH values of less than 10 percent to 50 percent
'set rgb 20 145 0 34'
'set rgb 21 166 17 34'
'set rgb 22 189 46 36'
'set rgb 23 212 78 51'
'set rgb 24 227 109 66'
'set rgb 25 250 143 67'
'set rgb 26 252 173 88'
'set rgb 27 254 216 132'
'set rgb 28 255 242 170'

# The green color section
# RH values of greater than 50 percent to greater than 90 percent
'set rgb 29 230 244 157'
'set rgb 30 188 227 120'
'set rgb 31 113 181 92'
'set rgb 32 38 145 75'
'set rgb 33 0 87 46'

# The NWS legend (levels) in percent
# Values range from less than 10 percent to greater than 90 percent
'set clevs 10 15 20 25 30 35 40 50 60 70 80 90'

# Setting the colors created above to be used for the image
'set ccols 20 21 22 23 24 25 26 27 28 29 30 31 32 33 33'

