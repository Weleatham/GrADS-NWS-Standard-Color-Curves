# Below is a GrADS script to generate wind chill images
# using the NWS standardized color curve. 

# Here are the RGB values below

# The pink color section 
# Wind chill values of -35 to less than -60
'set rgb 20 145 0 63'
'set rgb 21 206 18 86'
'set rgb 22 231 41 138'
'set rgb 23 223 101 176'
'set rgb 24 255 115 223'
'set rgb 25 255 190 232'

# The purple color section
# Wind chill values of -30 to -5
'set rgb 26 218 218 235'
'set rgb 27 188 189 220'
'set rgb 28 158 154 200'
'set rgb 29 117 107 177'
'set rgb 30 84 39 143'

# The blue color section
# Wind chill values of 0 to 25
'set rgb 31 13 0 125'
'set rgb 32 13 61 156'
'set rgb 33 0 102 194'
'set rgb 34 41 158 255'
'set rgb 35 74 199 255'
'set rgb 36 115 215 255'

# The teal color section
# Wind chill values of 30 to 40
'set rgb 37 173 255 255'
'set rgb 38 48 207 194'
'set rgb 39 0 153 150'

# The gray color section 
# Wind chill values greater than 40
'set rgb 40 220 220 220'

# The NWS legend (levels)
# Values range from -55 to 40 degrees 
'set clevs -55 -50 -45 -40 -35 -30 -25 -20 -15 -10 -5 0 5 10 15 20 25 30 35 40 45'

# Setting the colors created above to be used for the image
'set ccols 20 21 22 23 24 25 0 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 40'
