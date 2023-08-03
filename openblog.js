export default class OpenBlog {
  #blogId;
  #basePath;
  #pageHandle;

  constructor(blogId, basePath) {
    this.blogId = blogId;
    this.basePath = basePath;
  }

  async getPage(pageHandle, pagination) {
    if (!pageHandle) pageHandle = "index";
    let url =
      "https://openblog.app/api/get_embedded_page?blog_id=" +
      this.blogId +
      "&page_handle=" +
      pageHandle +
      "&externalUrl=" +
      this.basePath;

    if (pagination) {
      url += "&page=" + pagination;
    }

    let res = await this.fetchRemotePage(url);
    return res;
  }

  async getSiteMap() {
    let url =
      "https://openblog.app/api/get_sitemap?blog_id=" +
      this.blogId +
      "&externalUrl=" +
      this.basePath;

    let res = await this.fetchRemotePageText(url);
    return res;
  }

  fetchRemotePageText = async (url) => {
    url = encodeURI(url);
    const response = await fetch(url);
    const content = await response.text();
    return content;
  };

  fetchRemotePage = async (url) => {
    url = encodeURI(url);
    const response = await fetch(url);
    const content = await response.json();
    return content;
  };
}
