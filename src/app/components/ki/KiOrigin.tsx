import Image from "next/image";
export default function KiOrigin() {
  return (
    <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-md">
      <h2 className="text-3xl md:text-3xl text-[var(--accent)] mb-6 text-center">
        <span className="font-semibold">Origin of Ki</span>
      </h2>
      <div className="space-y-4 text-[var(--tx)] text-lg md:text-xl leading-relaxed text-center">
        <p>
          <span className="font-bold ">Ki</span> is an ancient East Asian
          concept meaning life force, vital energy, breath.
        </p>
        <p>
          In traditional practice, cultivating{" "}
          <span className="font-bold">Ki</span> means harmonizing{" "}
          <span className="font-bold">mind, body,</span> and{" "}
          <span className="font-bold">spirit</span> through{" "}
          <span className="italic font-semibold">presence, breath,</span> and{" "}
          <span className="italic font-semibold">intentional practice</span>.
        </p>
      </div>
      <br />
      {/* sun */}
      <Image
        src={"/assets/sun.png"}
        alt="sun"
        width={75}
        height={75}
        className="mx-auto rounded-full animate-bob"
      />
    </div>
  );
}
