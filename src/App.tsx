import Navbar from './components/navbar';
import Product from './components/product';


const App = () => (
    <div>
        <Navbar />
        <div className='products-container'>
            <Product title="Cherries" image="cherries.jpg" description="Add cherries to your basket" />
            <Product title="Apples" image="apples.jpg" description="Add apples to your basket" />
            <Product title="Grapes" image="grapes.jpg" description="Add grapes to your basket" />
            <Product title="Pineapples" image="pineapple.jpg" description="Add pineapples to your basket" />
        </div>
    </div>
)

export default App;
