import { FaCheckCircle } from "react-icons/fa";
const PriceOption = ({option}) => {
    const {name,features,price} = option
    return (
        <div className="text-white bg-teal-500 p-5 rounded-lg flex flex-col">
            
            <div className="flex-grow ">
            <h1 className="text-xl font-bold  text-center pb-1">{name}</h1>
            <div className="border-t-2  border-gray-200 pb-3"></div>
            <div className="pl-5 flex-grow">
                {
                features.map(feature =><p className="flex items-center gap-2"><FaCheckCircle className="text-purple-700"></FaCheckCircle> {feature}</p> )
                }
            </div>
            <h1 className="font-bold pt-2">Price: {price}</h1>
            </div>

            <div className="justify-center pt-8">
               <button className="font-bold bg-green-600 w-full hover:bg-green-900 rounded-lg">Purchase</button>
            </div>
        </div>
    );
};

export default PriceOption;