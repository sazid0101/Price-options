import Option from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const gymPlans = [
        {
          id: 1,
          name: "Basic Plan",
          features: ["Access to gym equipment", "Locker room access"],
          price: "$19.99/month"
        },
        {
          id: 2,
          name: "Standard Plan",
          features: ["24/7 Gym Access", "Locker & Shower Access", "1 Free Fitness Class/Month"],
          price: "$39.99/month"
        },
        {
          id: 3,
          name: "Premium Plan",
          features: ["24/7 Gym Access", "Unlimited Fitness Classes","Personalized Workout Plan"],
          price: "$59.99/month"
        },
        {
          id: 4,
          name: "Couples Plan",
          features: ["Gym Access for 2 People", "Locker & Shower Access", "1 Personal Training Session"],
          price: "$79.99/month"
        },
        {
          id: 5,
          name: "Student Plan",
          features: ["Discounted Gym Access", "Free Weekend Classes", "Access to Study Lounge"],
          price: "$29.99/month"
        },
        {
          id: 6,
          name: "VIP Plan",
          features: ["Private Training Sessions", "Premium Locker Room","Diet Consultation"],
          price: "$99.99/month"
        }
      ];
      
    return (
        <div>
            <h1 className=" flex justify-center pt-5 pb-5 text-4xl font-bold text-teal-800 ">Best Price In Town</h1>

            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ml-10 mr-10 gap-10 mb-10">
            {
                gymPlans.map(option => <Option option ={option}></Option>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;