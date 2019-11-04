# Below is a GrADS script to generate radar reflectivity images
# using the AWIPS default color curve.

# Here are the RGB values below

'set rgb 20 115 80 175' 
'set rgb 21 150 150 80'
'set rgb 22 210 210 180'
'set rgb 23 65 90 160'
'set rgb 24 110 215 235'
'set rgb 25 15 210 20'
'set rgb 26 15 180 20'
'set rgb 27 10 95 19'
'set rgb 28 255 245 5'
'set rgb 29 255 0 0'
'set rgb 30 235 40 235'
'set rgb 31 175 0 255'
'set rgb 32 5 220 225'
'set rgb 33 0 35 35'

# The AWIPS leged in dBZ
# Values range from -30 dBZ to greater than 70 dBZ
'set clevs -30 -20 -10 10 18 23 27 35 40 45 50 60 68 70 75 90'

# Setting the colors created above to be used for the image
'set ccols 0 0 0 0 23 24 25 26 27 28 29 0 30 31 32 33 33'
