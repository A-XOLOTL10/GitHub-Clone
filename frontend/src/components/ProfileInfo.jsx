import { FaEye } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TfiThought } from "react-icons/tfi";
import { RiGitRepositoryFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { formatMemberSince } from "../utils/functions";

const ProfileInfo = ({userProfile}) => {
  // const userProfile = {
    // avatar_url:
    //   "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    // bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
    // email: "johndoe@gmail.com",
    // followers: 100,
    // following: 200,
    // html_url: "https://github.com/burakorkmez",
    // location: "Somewhere, Earth",
    // name: "John Doe",
    // public_gists: 100,
    // public_repos: 100,
    // twitter_username: "johndoe",
    // login: "johndoe",
  // };
  const memberSince = formatMemberSince(userProfile?.created_at);

  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 lg:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-3 item-center">
          {/* user avatar */}
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              className="rounded-md w-24 h-24 mb-2"
              alt=""
            />
          </a>

          {/* view on github */}
          <div className="flex gap-2 items-center flex-col">
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View On Github
            </a>
          </div>
        </div>
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {/* location */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {userProfile?.location}
          </div>
        ) : null}

        {/* twitter username */}
        {userProfile?.twitter_username ? (
          <a
            href="https://twitter.com"
            className="flex items-center gap-2 hover:text-sky-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
            {userProfile?.twitter_username}
          </a>
        ) : null}

        {/* Member since date */}
        <div className="my-2">
          <p className="text-gray font-bold text-sm">Member Since</p>
          <p className="font-bold">{memberSince}</p>
        </div>

        {/* Email Address */}
        {userProfile?.email && (
           <div className="my-2">
            <p className="text-gray font-bold text-sm">Email</p>
            <p className="font-bold">{userProfile?.email}</p>
          </div>
        )}

        {/* FullName  */}
        {userProfile?.name && (
          <div className="my-2">
            <p className="text-gray font-bold text-sm">Full Name</p>
            <p className="font-bold">{userProfile?.name}</p>
          </div>
        )}

        {/* UserName*/}
        <div className="my-2">
          <p className="text-gray font-bold text-sm">Member Since</p>
          <p className="font-bold">{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>

        {/* Number of public repos */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {userProfile?.public_repos}</p>
        </div>

        {/* Number of public gists */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
