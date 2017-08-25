# Getting started with Zendesk apps with React, Vue and Angular

The minimal amount of code you need to get started with Zendesk Apps using your javascript framework of preference.

## Getting Started

Please get yourself familiar with the [Zendesk documentation](https://developer.zendesk.com/apps/docs/apps-v2/getting_started)

### Prerequisites

You will need either `npm` or `yarn` and the `zendesk_apps_tools` installed.
Please refer to the [Zendesk documentation](https://developer.zendesk.com/apps/docs/apps-v2/getting_started)

### Running the app

`./bin/compilation-watcher` tells webpack to watch for file changes

`./bin/zat-server` serve the app from the dist folder which is where the index.html and app.js lives

### Viewing the app

1. Open up a ticket with the zat flag `https://[some-instance].zendesk.com/agent/tickets/1?zat=true`
2. Make sure to allow the insecure scripts to load
3. Open up the Apps sidebar
4. The app should appear with a title, icon and details about the ticket.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

