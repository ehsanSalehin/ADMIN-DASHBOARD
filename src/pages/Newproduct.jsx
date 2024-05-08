import "./newproduct.css"
import { Publish } from "@mui/icons-material"

export default function Newproduct() {
  return (
    <div className="newProduct">
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
