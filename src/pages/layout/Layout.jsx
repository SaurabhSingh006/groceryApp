import { useEffect } from "react";
import { auth } from "../../firebase-config";
import Footer from "../../non-reusable-components/Footer";
import { Outlet } from "react-router-dom";

// import { db } from "../../firebase-config";
// import { getDocs, collection } from "firebase/firestore";

console.log(auth);

function Home() {

    // const [categories, setCategories] = useState([]);
    // const categoriesRef = collection(db, "categories");
    

    useEffect(() => {
    //   const getCategories = async () => {
    //     const categories = await getDocs(categoriesRef);
    //     console.log(categories)
    //     // setCategories(categories.docs.map((doc) => ({...doc.data()})));
    //   };

    //   getCategories;
    }, []);

    return (
        <div className="max-w-full max-h-screen overflow-auto overflow-x-hidden">
            {/* {categories.map(c => (
                <div>
                    {c.category_name}

                    <img alt="sss" src={c.image_url} />
                </div>
            ))} */}

            <Outlet />

            <Footer />
        </div>
    )
}

// Fruits
// Vegetables
// Dairy
// Meat
// Bread
// Canned Goods
// Snacks
// Beverages
// Household Items
// Personal Care
// Cleaning Supplies

// Fruits:

// Apples
// Bananas
// Oranges
// Berries
// Grapes
// Kiwi
// Pineapples
// Vegetables:

// Carrots
// Broccoli
// Spinach
// Tomatoes
// Bell peppers
// Cucumbers
// Onions
// Dairy Products:

// Milk
// Cheese
// Yogurt
// Butter
// Eggs
// Sour cream
// Meat and Poultry:

// Chicken
// Beef
// Pork
// Lamb
// Ground meat
// Sausages
// Seafood:

// Salmon
// Shrimp
// Tuna
// Cod
// Crab
// Mussels
// Grains and Cereals:

// Rice
// Pasta
// Bread
// Oats
// Quinoa
// Cereals
// Snacks and Sweets:

// Chips
// Cookies
// Chocolate
// Popcorn
// Candy
// Nuts
// Beverages:

// Water
// Soda
// Juice
// Coffee
// Tea
// Wine

export default Home;