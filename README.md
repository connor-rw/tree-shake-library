# Setup

To run this example:

```bash
bash ./setup.sh
cd client
npm start
```

App should be running on http://localhost:8080. When clicking the "Go to about page" button, the app should not route. This error should be logged in the console:

`[Vue warn]: Unknown custom element: <router-link> - did you register the component correctly? For recursive components, make sure to provide the "name" option.`