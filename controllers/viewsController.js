exports.getOverview = async (req, res, next) => {
  res.status(200).render("overview", {
    title: "Foodie's Delight",
  });
};
