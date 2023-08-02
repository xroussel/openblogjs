# Javascript library for OpenBlog

![OpenBlog logo](https://openblog.app/openblog-logo.svg)
**openblogjs** is a javascript library to integrate your OpenBlog anywhere in your app.
You need an account from [openblog.app](openblog.app) to use this library.

## Getting started

1.  First Create a **catch-all** page where you want your blog to be rendered in your app.

Example with NextJS :

```
    /pages/blog/[handle].js
```

2.  Fetch the page content from OpenBlog

```javascript
const openBlog = new OpenBlog("YOUR_BLOG_ID", "CURRENT_PATH");
const content = await openblog.getPage(PAGE_HANDLE);
```

The _content_ var will contain the **HTML/CSS** you can inject anywhere you want on your page to display your content.

You can also use this library for woth **Client side rendering** and **Server side rendering**
