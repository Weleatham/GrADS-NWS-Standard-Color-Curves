# Below is a GrADS script to generate total precipitation images (in inches)
# using the NWS standardized color curve.

# Here are the RGB values below

# The green color section
# Precipitation amounts range from less than 0.1 inches to 1.5 inches
'set rgb 20 199 233 192'
'set rgb 21 161 217 155'
'set rgb 22 116 196 118'
'set rgb 23 49 163 83'
'set rgb 24 0 109 44'

# The yellow to orange color section
# Precipitation amounts range from greater than 1.5 inches to 4 inches
'set rgb 25 255 250 138'
'set rgb 26 255 204 79'
'set rgb 27 254 141 60'

# The red color section
# Precipitation amounts range from greater than 4 inches to 15 inches
'set rgb 28 252 78 42'
'set rgb 29 214 26 28'
'set rgb 30 173 0 38'
'set rgb 31 112 0 38'

# The purple color section
# Precipitation amounts range from greater than 15 inches to greater than 50 inches
'set rgb 32 59 0 48'
'set rgb 33 76 0 115'
'set rgb 34 255 219 255'

# The NWS legend (levels) in inches
# Values range from 0 inches to greater than 50 inches
'set clevs 0.1 0.25 0.5 1.0 1.5 2.0 3.0 4.0 6.0 8.0 10.0 15.0 20.0 30.0 50.0'
'set ccols 0 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 34'
