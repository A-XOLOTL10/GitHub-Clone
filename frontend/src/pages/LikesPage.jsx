import { FaHeart } from "react-icons/fa";

const LikesPage = () => {
  return (
    <div className="relative overflow-x-auto showdow-md rounded-lg px-4">
    <table className="w-full text-sm text-left rtl:text-right bg-glass overflow-hidden ">
      <thead className="text-xs uppercase bg-glass ">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex item-center">No</div>
          </th>
          <th scope="col" className="px-6 py-3">
            Username
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-glass border-b">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <span>1</span>
            </div>
          </td>
          <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap">
            <img 
              src="./profile 1.jpg" 
              alt="waiting..." 
              className="w-10 h-10 rounded-full" 
            />
            <div className="ps-3">
              <div className="text-base font-semibold">Williams</div>
            </div>
          </th>
          <td className="px-6 py-4">12-09-2024</td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <FaHeart size={22} className="text-red-500 mx-2"/> Liked Your Profile
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default LikesPage;
