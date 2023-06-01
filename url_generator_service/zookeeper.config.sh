#!/bin/bash



zkServer.sh start-foreground

# Wait for ZooKeeper to start
sleep 10
# Use the ZooKeeper client to create a persistent znode
echo "create /persistent_node data" | zkCli.sh -server localhost:2181
