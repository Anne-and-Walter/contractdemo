#!/bin/bash

cd $(git rev-parse --show-toplevel)
SERVER_PID=$(./gradlew bootRun)

npm --prefix client test

kill $SERVER_PID