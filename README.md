# SynTalk-push-action

Repository executed on Syntalk's private repo. It basically executes a JavaScript script that changes a trello roadmap.

## Setup

### Set up your repository

First of all, you need to make a workflow script where the script is executed.
Note: Script must run on `ubuntu-latest`

1- Create a file called `custom.yml`

Example:
```
name: Change roadmap

on:
  push:
    branches: [ main ]
    workflow_dispatch: # Leave this if you want to execute the script manually
    
jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Change Roadmap
        uses: migue802/SynTalk-push-action@v1.1
        with: 
          targetList: yourTargetListIDhere            # https://stackoverflow.com/a/50908600/14516042
          destinationList: yourDestinationListIDhere  # https://stackoverflow.com/a/50908600/14516042
          key: ${{ secrets.TRELLOKEY }}
          token: ${{ secrets.TRELLOTOKEN }}
```

2- Replace `targetList` and `destinationList` on the script
