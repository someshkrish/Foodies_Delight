const axios = require('axios');

exports.getOverview = (req, res, next) => {
  res.status(200).render('overview', {
    title: "Foodie's Delight"
  });
};

exports.getRecipes = async (req, res, next) => {
  try {
    let data = {
      totalResultsAvailable: 0,
      results: []
    };

    const options = {
      method: 'GET',
      url: `https://tasty.p.rapidapi.com/recipes/list`,
      params: {
        from: '0',
        size: '20',
        tags: 'under_30_minutes',
        q: req.query.search
      },
      headers: {
        'x-rapidapi-key': '45123137dfmsh8dc2e63c8e22d07p1699cajsn62e17d80cb3f',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    data.totalResultsAvailable = response.data.count;
    data.results = response.data.results.map((el) => ({
      name: el.name,
      slug: el.slug,
      src: el.thumbnail_url
    }));

    res.status(200).render('recipes', {
      title: "Foode's Delight",
      recipes: data.results
    });
  } catch (err) {
    console.log(err);
    window.location.assign('/');
  }
};
