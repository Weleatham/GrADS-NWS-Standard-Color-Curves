#GrADS script to generate NWS precip color curve
#RGB Precipitation
#Up to 0.10 in 
'set rgb 20 199 233 192'
#0.10 to 0.25 in 
'set rgb 21 161 217 155'
#0.25 to 0.50 in
'set rgb 22 116 196 118'
#0.50 to 1.00 in
'set rgb 23 49 163 83'
#1.00 to 1.50 in 
'set rgb 24 0 109 44'
#1.50 to 2.00 in 
'set rgb 25 255 250 138'
#2.00 to 3.00 in
'set rgb 26 255 204 79'
#3.00 to 4.00 in
'set rgb 27 253 141 60'
#4.00 to 6.00 in
'set rgb 28 252 78 42'
#6.00 to 8.00 in 
'set rgb 29 214 26 28'
#8.00 to 10.0 in
'set rgb 30 173 0 38'
#10.0 to 15.0 in 
'set rgb 31 112 0 38'
#15.0 to 20.0 in
'set rgb 32 59 0 48'
#20.0 to 30.0 in
'set rgb 33 76 0 115'
#30.0 to 50.0 in
'set rgb 34 255 219 255'

# The NWS legend in inches
# Values range from 0 to greater than 36 inches
'set clevs 0.1 0.25 0.50 1.00 1.50 2.00 3.00 4.00 6.00 8.00 10.00 15.00 20.00 30.00 50.00'
'set ccols 0 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34'