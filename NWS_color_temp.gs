# Below is a GrADS script to generate surface temperature images
# using the NWS standardized color curve.

# Here are the RGB values below

# The pink color section
# Temperature values range from less than -55 degrees to -35 degrees
'set rgb 20 145 0 63'
'set rgb 21 206 18 86'
'set rgb 22 231 41 138'
'set rgb 23 223 101 176'
'set rgb 24 255 115 223'
'set rgb 25 255 190 232'

# The purple color section
# Temperature values range from greater than -30 degrees to 0 degrees 
'set rgb 26 218 218 235'
'set rgb 27 188 189 220'
'set rgb 28 158 154 200'
'set rgb 29 117 107 177'
'set rgb 30 84 39 143'
'set rgb 31 13 0 125'

# The blue section
# Temperature values range from greater than 0 degrees to 30 degrees
'set rgb 32 13 61 156'
'set rgb 33 0 102 194'
'set rgb 34 41 158 255'
'set rgb 35 74 199 255'
'set rgb 36 115 215 255'
'set rgb 37 173 255 255'

# The teal section
# Temperature values range from greater than 30 degrees to 45 degrees
'set rgb 38 48 207 194'
'set rgb 39 0 153 150'
'set rgb 40 18 87 87'

# The green section
# Temperature values range from greater than 45 degrees to 70 degrees
'set rgb 41 6 109 44'
'set rgb 42 49 163 84'
'set rgb 43 116 196 118'
'set rgb 44 161 217 155'
'set rgb 45 211 255 190'

# The yellow section
# Temperature values range from greater than 70 degrees to 95 degrees
'set rgb 46 255 255 179'
'set rgb 47 255 237 160'
'set rgb 48 254 209 118'
'set rgb 49 254 174 42'
'set rgb 50 253 141 60'

# The red section
# Temperature values range from greater than 95 degrees to greater than 120 degrees
'set rgb 51 252 78 42'
'set rgb 52 227 26 28'
'set rgb 53 177 0 38'
'set rgb 54 128 0 38'
'set rgb 55 89 0 66'
'set rgb 56 40 0 40'

# The NWS legend (levels) in degrees Fahrenheit
# Values range from -55 degrees to greater than 120 degrees
'set clevs -55 -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0 5 10 15 20 25 30 35 40 45 50 55 60 65 70 75 80 85 90 95 100 105 110 115 120' 

# Setting the colors created above to be used for the image
'set ccols 20 21 22 23 24 25 0 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 56'  

