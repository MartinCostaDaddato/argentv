import Image from "next/image";
import Link from "next/link";

function CanalCard({ canal }) {
  return (
    <div className="flex flex-wrap justify-center items-center  mt-10 rounded-xl mb-10">
      <div className="w-[400px] h-[400px] flex justify-center items-center ">
        <Image
          src={canal.logoCanal}
          alt={canal.nombreCanal}
          height={400}
          width={400}
          className="rounded-t-xl md:rounded-none md:rounded-l-xl  bg-white"
        />
      </div>
      <div className=" text-white w-[400px] text-center flex flex-col justify-between items-center min-h-[400px] bg-zinc-900 rounded-b-xl md:rounded-none md:rounded-r-xl ">
        <p className="text-3xl font-bold w-[400px] mt-10">
          {canal.nombreCanal}
        </p>
        <div className="text-md  text-white w-[400px] text-start p-5">
          {canal.descripcion}
        </div>

        <Link
          href={canal.urlCanal}
          target="_blank"
          className="text-white font-bold  rounded-xl bg-red-600 hover:bg-red-800 p-5 m-5"
        >
          Ver en vivo
        </Link>
        <div className="flex mb-10 gap-5 ">
          <Link href={canal.instagramUser} target="_blank">
            <Image
              src="/images/redes/instagram.png"
              alt={`Instagram de ${canal.nombreCanal}`}
              height={30}
              width={30}
              className="rounded-xl"
            />
          </Link>
          <Link href={canal.xUser} target="_blank">
            <Image
              src="/images/redes/X.png"
              alt={`Twitter de ${canal.nombreCanal}`}
              height={30}
              width={30}
              className="rounded-xl "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CanalCard;
