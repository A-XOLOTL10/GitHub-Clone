import Repo from "./Repo";

const Repos = ({repos, alwaysFullWidth = false}) => {
  // console.log(repos)
  const className = alwaysFullWidth? 'w-full' : 'lg:w-2/3 w-full'
  return (
      <div className ={` ${className} bg-glass rounded-lg px-8 py-6`}>
        <ol className="relative border-s border-gray-200">
          {repos && repos.length > 0 ?
          (repos.map(repo =>(
            <Repo key={repo.id} repo={repo} />
          ))):
          ( <p className="flex items-center justify-center h-32">No repos found</p>)}
      </ol>
    </div>
  );
};

export default Repos;
