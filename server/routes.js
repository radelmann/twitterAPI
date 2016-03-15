module.exports = function(app) {
  app.get('/api', function(req, res) {
    res.status(200);
    res.json({
      success: "OK"
    });
  });
}