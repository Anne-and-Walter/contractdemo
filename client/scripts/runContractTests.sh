#!/bin/bash

cd $(git rev-parse --show-toplevel)
./gradlew bootRun > /dev/null 2>&1 &
SERVER_PID=$!

npm --prefix client test

kill $SERVER_PID