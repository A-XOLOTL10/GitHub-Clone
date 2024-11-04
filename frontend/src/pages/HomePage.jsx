import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
    async (username = "A-XOLOTL") => {
      setLoading(true);
      try {
        // Fetch user profile data
        const res = await fetch(`http://localhost:5000/api/users/profile/${username}`)
        const {repos, userProfile} = await res.json()
      
          repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          
          setRepos(repos);
          setUserProfile(userProfile);


          return { userProfile, repos };
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false); // Reset loading state after API call ends.
      }
    },
    [setUserProfile, setRepos, toast, setLoading]
  );

  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, reposData } = await getUserProfileAndRepos(username);
    // console.log(" search userProfile:", userProfile);
    // console.log("search repos", repos)
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent")
  };

  const onSort = (sortType) => {
    sortType == "recent"
      ? repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      : null;
    sortType == "stars"
      ? repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
      : null;
    sortType == "forks"
      ? repos.sort((a, b) => b.forks_count - a.forks_count)
      : null;

    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
