function() {
  var config = {
    demoUrlBase: 'http://localhost:8080'
  };
  if (karate.env == 'dev-mock') {
    karate.configure('httpClientClass', 'mockhttp.jersey.MockJerseyServlet');
  }
  return config;
}