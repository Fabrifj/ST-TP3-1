#!/bin/bash
for i in {1..5}
do
   docker run -d -e "THEHOST=mqtt://10.1.2.107:7777" -e "THETOPIC=ds2022" --name sub$i alpine-node-sub
done