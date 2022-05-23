# Vue_JS


### Install Vue CLI
```vue
npm install -g @vue/cli
npm i -g @vue/cli-init
Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
```

### project scaffolding
```vue
vue init webpack project_name
```

### Add Bootstrap
```
npm install bootstrap@4.0 jquery popper.js
```


#### Add in main.js
```vue
window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

#### run project
```CLI
npm run dev
```

