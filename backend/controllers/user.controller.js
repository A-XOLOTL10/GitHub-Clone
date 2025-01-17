const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;
  try {
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          authorisation: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const userProfile = await userResponse.json();
    console.log(userProfile)

    const reposResponse = await fetch(userProfile.repos_url, 
        {
      headers: {
        authorisation: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
    );
    const repos = await reposResponse.json();

    res.status(200).json({userProfile, repos});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserProfileAndRepos;
