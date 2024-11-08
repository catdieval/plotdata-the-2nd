import dynamic from 'next/dynamic';
const HomePage = dynamic(() => import("../Components/HomePage"), {ssr: false})
 
 export default function StartPage() {

  return (
    <HomePage/>
  );
 } 
