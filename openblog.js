export default class OpenBlog {
  #blogId;
  #basePath;
  #pageHandle;

  constructor(blogId, basePath) {
    this.blogId = blogId;
    this.basePath = basePath;
  }

  async getPage(pageHandle) {
    if (!pageHandle) pageHandle = "index";
    let url =
      "https://openblog.app/api/get_embedded_page?blog_id=" +
      this.blogId +
      "&page_handle=" +
      pageHandle +
      "&externalUrl=" +
      this.basePath;

    let res = await this.fetchRemotePage(url);
    return res;
  }

  fetchRemotePage = async (url) => {
    url = encodeURI(url);
    const response = await fetch(url);
    const content = await response.json();
    return content;
  };
}
