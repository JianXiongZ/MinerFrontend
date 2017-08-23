#!/bin/bash
#为什么一定要有头header
echo Content-type: text/html
echo ""

kill -9 `ps -aux | grep '/home/canaan/eth_miner/ethdcrminer64' | grep -v grep | awk '{print $2}'`
