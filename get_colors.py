import cv2
import numpy as np
from collections import Counter

img = cv2.imread('images/global_eagle_logo.jpg')
img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

# Flatten image
pixels = img.reshape(-1, 3)

# Filter out white/gray colors
color_pixels = []
for p in pixels:
    r, g, b = p
    # if not white/gray
    if max(p) - min(p) > 20 and min(p) < 200:
        color_pixels.append(tuple(p))

counts = Counter(color_pixels)
most_common = counts.most_common(20)

for color, count in most_common:
    r, g, b = color
    hex_color = "#{:02x}{:02x}{:02x}".format(r, g, b)
    print(f"{hex_color} - count: {count}")
