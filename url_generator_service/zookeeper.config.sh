#!/bin/bash
sleep 10
zkCli.sh -server url_generator_zoo1:2181 create  /url_generator_nodes ""
