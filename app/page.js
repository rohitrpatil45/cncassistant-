import Image from "next/image";
import Navbar from "./Components/Navbar";
import Head from "./Components/Head";

export default function Home() {
  return (
    <div className="bg-green-400 w-screen h-screen flex items-center justify-center">
      <Head />
      <h4 className="text-yellow-300 text-8xl flex justify-center items-center ">rohit</h4>
    </div>
  );
}
