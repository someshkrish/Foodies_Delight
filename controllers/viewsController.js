const axios = require('axios');

exports.getOverview = (req, res, next) => {
  res.status(200).render('overview', {
    title: "Foodie's Delight"
  });
};

exports.getRecipes = async (req, res, next) => {
  try {
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
    const results = response.data.results.map((el) => ({
      name: el.name,
      slug: el.slug,
      src: el.thumbnail_url,
      id: el.id
    }));

    res.status(200).render('recipes', {
      title: "Foodie's Delight | Search Results",
      recipes: results
    });
  } catch (err) {
    res.status(200).render('overview', {
      title: "Foodie's Delight"
    });
  }
};

exports.getFavourites = async (req, res, next) => {
  try {
    res.status(200).render('favourite', {
      title: "Foodie's Delight | Favourite"
    });
  } catch (err) {
    res.status(200).render('overview', {
      title: "Foodie's Delight"
    });
  }
};

exports.getDetails = async (req, res, next) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/detail',
      params: { id: req.params.id },
      headers: {
        'x-rapidapi-key': '45123137dfmsh8dc2e63c8e22d07p1699cajsn62e17d80cb3f',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const { instructions, nutrition } = response.data;
    const steps = instructions.map((el) => el.display_text);

    res.status(200).render('details', {
      title: "Foodie's Delight | Details Page",
      steps,
      nutrition
    });
  } catch (err) {
    res.status(200).render('overview', {
      title: "Foodie's Delight"
    });
  }
};
