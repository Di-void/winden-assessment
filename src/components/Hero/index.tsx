import GetStarted from "../common/Buttons/GetStarted";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="px-20 py-10 bg text-white">
      <div className="py-11">
        <h1 className="txt-gradient-1 text-5xl inline-block text-transparent">
          Business banking with
        </h1>

        <div className="w-[60%] h-[70px] overflow-hidden">
          <h1 className="text-7xl txt-gradient-2 inline-block text-transparent">
            No credit check
          </h1>
          <h1 className="text-7xl txt-gradient-2 inline-block text-transparent">
            Free Wires
          </h1>
          <h1 className="text-7xl txt-gradient-2 inline-block text-transparent">
            Unlimited Rewards
          </h1>
        </div>

        <p className="w-[55%] mt-4">
          Thousands of entrepreneurs bank on Winden to start or grow their
          business. Open an account in under 3 minutes.
        </p>
      </div>

      <GetStarted />

      <div className="flex gap-2">
        <div>
          <Image
            src="/logo-purple.svg"
            width={30}
            height={30}
            alt="small logo"
          />
        </div>

        <p>Sign up today and earn up to $200. Conditions apply. **</p>
      </div>
    </section>
  );
};

export default Hero;
