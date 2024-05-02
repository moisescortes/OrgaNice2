import olga_Img from "/src/assets/olgaTransparente.png";


export default function Footer(){
    return(
        <>
<footer className="bg-dpurp shadow ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={olga_Img} className="h-24" alt="Olga" />
                <span className="self-center text-5xl font-semibold whitespace-nowrap text-white">OrgaNice</span>
            </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-base text-mpurp font-semibold sm:text-center">© 2024 <a href="" className="hover:underline">OrgaNice™</a>. All Rights Reserved.</span>
    </div>
</footer>


        </>
    );
}