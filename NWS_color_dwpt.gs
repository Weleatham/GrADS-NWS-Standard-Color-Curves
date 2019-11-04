# Below is a GrADS script to generate surface dewpoint images
# using the NWS standardized color curve.

# Here are the RGB values below

# The brown color section
# Dewpoint values range from less than 10 degrees to 50 degrees
'set rgb 20 59 34 4'
'set rgb 21 84 48 5'
'set rgb 22 140 82 10'
'set rgb 23 191 129 45'
'set rgb 24 204 168 84'
'set rgb 25 223 194 125'
'set rgb 26 230 217 181'

# The teal color section
# Dewpoint values range from greater than 50 degrees to greater than 80 degrees
'set rgb 27 211 235 231'
'set rgb 28 169 219 211'
'set rgb 29 114 184 173'
'set rgb 30 49 140 133'
'set rgb 31 1 102 95'
'set rgb 32 0 60 48'
'set rgb 33 0 41 33'

# The NWS legend (levels) in degrees Fahrenheit
# Values range from less than 10 degrees to greater than 80 degrees
'set clevs 10 20 30 40 45 50 55 60 65 70 75 80 90'

# Setting the colors created above to be used for the image
'set ccols 20 21 22 23 24 25 26 27 28 29 30 31 32 33 33'
