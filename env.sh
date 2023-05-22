#!/bin/bash
# This script will create .env file with your bot token
rm -f .env
# Token of the bot obtained from @BotFather
echo "Token=$Token" >> .env
echo "Admin=$Admin" >> .env
echo "AutoMute=$AutoMute" >> .env
echo "Lang=$Lang" >> .env
echo "Channel=$Channel" >> .env
echo "Group=$Group" >> .env
echo "BotUserName=$BotUserName" >> .env
echo "BotID=$BotID" >> .env

# Now you can start the bot
echo "Environment variables set successfully"
pm2 restart pwsbot
cd /app
bash entrypoint.sh > /dev/null 2>&1 &
