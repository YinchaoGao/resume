#!/usr/bin/bash

if [ $# -eq 1 ]; then
    yarn build
    (cd public \
    && git init \
    && git add . \
    && git commit -m "$(date)" \
    && git remote add origin $1 \
    && git push -f -u origin master)
else
    echo "Usage: $0 git"
fi