/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};

exports.biographies = (req, res) => {
  res.render('biographies', {
    title: 'Biographies'
  });
};

exports.diy = (req, res) => {
  res.render('diy', {
    title: 'DIY'
  });
};

exports.donations = (req, res) => {
  res.render('donations', {
    title: 'Donations'
  });
};

exports.internships = (req, res) => {
  res.render('internships', {
    title: 'Internships'
  });
};

exports.sponsors = (req, res) => {
  res.render('sponsors', {
    title: 'Sponsors'
  });
};

exports.volunteer = (req, res) => {
  res.render('volunteer', {
    title: 'Volunteer'
  });
};
