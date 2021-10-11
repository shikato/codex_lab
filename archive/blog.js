/* Write a blog service. */
var blogService = {
  posts: [
    {
      title: 'Hello World',
      content: 'This is my first post.'
    },
    {
      title: 'Hello World 2',
      content: 'This is my second post.'
    }
  ],
  getPosts: function() {
    return this.posts;
  }
};

