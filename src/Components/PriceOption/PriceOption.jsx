const PriceOption = ({option}) => {
    const {name,features,price} = option
    return (
        <div className="text-white">
            
            <div className="bg-teal-500 p-5 rounded-lg">
            <h1 className="text-xl font-bold ">{name}</h1>
            {
                features.map(feature =><li>{feature}</li> )
            }
            <h1 className="font-bold">Price: {price}</h1>
            </div>
        </div>
    );
};

export default PriceOption;