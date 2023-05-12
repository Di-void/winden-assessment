import RightArrowIcon from "../common/icons/RightArrowIcon";
import Logo from "../common/icons/Logo";

const Navbar = () => {
  return (
    <nav>
      <section className="ad py-2 flex justify-center">
        <h3 className="text-white">**Earn up to $200 for getting started</h3>

        <button className="ml-3">
          <RightArrowIcon />
        </button>
      </section>

      <section className="bg px-20 flex justify-between items-center py-4">
        <div className="flex text-white items-center">
          <div>
            <Logo />
          </div>
          <h4 className="font-normal text-2xl">Winden</h4>
        </div>

        <ul className="text-white flex gap-10">
          <li className="capitalize">use cases</li>
          <li className="capitalize">products</li>
          <li className="capitalize">company</li>
          <li className="capitalize">support</li>
        </ul>

        <div className="flex justify-between gap-5">
          <button className="text-white capitalize">log in</button>
          <button className="text-white capitalize bg-blackish-grey px-4 py-2">
            sign up
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
