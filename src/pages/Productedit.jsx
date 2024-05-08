import Chart from "../components/Charts"
import "./productedit.css"
import { Link } from "react-router-dom"
import {productData} from "../chartdata"
import { Publish } from "@mui/icons-material"

export default function Productedit() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newproduct">
            <button className="Add">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                 <Chart data={productData} datakey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productTopInfo">
                    <img src="" alt="no pics" className="Img" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productBottomInfo">
                    <div className="productInfoItem">
                        <div className="productInfoKey">id:</div>
                        <div className="productInfoValue">123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">sales:</div>
                        <div className="productInfoValue">1283</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">active:</div>
                        <div className="productInfoValue">yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">in stock:</div>
                        <div className="productInfoValue">no</div>
                    </div> 
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple AirPo" />
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="Active" id="Active">
                    <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="" alt="no pics" className="ImgUpload"/>
                        <label>
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
