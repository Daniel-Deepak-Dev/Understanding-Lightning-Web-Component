# MY lWC

## Installing the app in developer edition using a VScode

1. Set up your environment. Follow the steps in the [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead project. The steps include:

    - Enable Dev Hub in your Trailhead Playground
    - Install Salesforce CLI
    - Install Visual Studio Code
    - Install the Visual Studio Code Salesforce extensions, including the Lightning Web Components extension

1. If you haven't already done so, authorize your hub org and provide it with an alias (**myhuborg** in the command below):
    ```
    sfdx force:auth:web:login -d -a myhuborg
    ```
1. Clone the Understanding-Lightning-Web-Component repository:

    ```
    git clone https://github.com/Daniel-Deepak-Dev/Understanding-Lightning-Web-Component
    cd Understanding-Lightning-Web-Component
    ```
1. Push the app to your scratch org:

    ```
    sfdx force:source:deploy
    ```
1. Assign the **my lwc** permission set to the default user:

    ```
    sfdx force:user:permset:assign -n mylwc
    ``

