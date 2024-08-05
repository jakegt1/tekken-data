#!/bin/bash

for file in *.png; do
    NEW_NAME=$(echo "$file" | sed -e 's/zzzzz-[0-9]*//g' -e 's/png.png/.png/g')
    mv "$file" "$NEW_NAME"
done