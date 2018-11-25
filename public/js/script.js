
const search_buton = document.querySelector(".search__btn");


//th search button , once clicked
search_buton.addEventListener("click",(e)=>{
  e.preventDefault();
  
    //read the value of the text field
    let query = document.querySelector(".search__field").value;

     query = query.toLowerCase();
    if(query) {
      document.getElementById("box-fill").innerHTML = ``;
      fetch('/search?query=' + encodeURIComponent(query))
        .then(response => {
          if (!response.ok) {
            throw new Error('I screwed up :-(')
          }

          return response.json();
        })
        .then(json => {
          console.log("THIS IS THE DATA?")
          console.log(json)

          //1. Once data is retrived, loop the links, scarpe em.
          //2. Once data is scarped, add to a string and contactee then conver to html tag.
        if(query === "iphone 8" || query === "iphone8"){
          document.getElementById("box-fill").innerHTML = 
            `
                <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.apple.com/ca/shop/buy-iphone/iphone-8#00" target="_blank" ><img src="css/img/iphone8e.jpeg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">Iphone 8</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$819.00</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.amazon.com/Apple-iPhone-Plus-Unlocked-64GB/dp/B0775FLHPN/ref=pd_lpo_vtph_107_bs_t_1/144-8566084-1874828?_encoding=UTF8&psc=1&refRID=79TMXV8RK2TT27EV2WVW" target="_blank" ><img src="css/img/iphone8e.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">Iphone 8</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$699.77</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.staples.ca/en/apple-iphone-8-4-7-inch-unlocked-cell-phone-64-gb-a11-bionic-cpu-hexa-core-ios-11-space-grey-mq6g2vc-a/product_2804272_1-CA_1_20001?CID=PS:GS:CA::pla-562526976393::58910733093::1558676762&CampaignID=1558676762&gclid=EAIaIQobChMIzMf00Ofu3gIVl7jACh2XWg3qEAQYBCABEgKGePD_BwE" target="_blank" ><img src="css/img/iphone8e.jpeg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">Iphone 8</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$818.99</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.ebay.ca/i/183457596142?chn=ps&dispItem=1" target="_blank" ><img src="css/img/iphone8e.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">Iphone 8</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$754.21</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6" style="margin-left:155px;">
                    
                    <a href="http://www.dx.com/p/apple-iphone-8-64gb-256gb-mobile-phone-unlocked-used-514861?tc=CAD&ta=CA&gclid=EAIaIQobChMIqrblyOju3gIVBY5pCh3U7Aw_EAkYAiABEgKedvD_BwE#.W_oz8pNKhTY" target="_blank" ><img src="css/img/iphone8e.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">Iphone 8</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$794.99</p>
                    </a>  
                </div>
            </div>
          `;
        }
        else if(query === "iphone x" || query === "Iphone X" || query === "iphone X"){
          document.getElementById("box-fill").innerHTML = 
          `
              <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.amazon.com/Apple-iPhone-Fully-Unlocked-5-8/dp/B075QN8NDH" target="_blank" ><img src="css/img/iphone10.png" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,090.00</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.amazon.ca/iPhone-256-GB-Space-Grey/dp/B076ZW6899/ref=asc_df_B076ZW6899/?tag=googleshopc0c-20&linkCode=df0&hvadid=292968346548&hvpos=1o4&hvnetw=g&hvrand=7860068919537324964&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9060195&hvtargid=pla-490653274056&psc=1" target="_blank" ><img src="css/img/iphone10.png" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,193.46</p>
                  </a>
              </div>
          </div>
          <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.ebay.ca/i/302951701624?chn=ps&dispItem=1" target="_blank" ><img src="css/img/iphone10.png" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,029.99</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.bestbuy.ca/en-ca/product/apple-iphone-x-256gb-unlocked-smartphone-in-gray-certified-refurbished/13285847.aspx?" target="_blank" ><img src="css/img/iphone10.png" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,099.99</p>
                  </a>
              </div>
          </div>
          <div class="row">
              <div class="col-6" style="margin-left:155px;">
                  
                  <a href="https://www.ebay.ca/itm/Apple-iPhone-X-256GB-Silver-Gray-GSM-Unlocked/273574499936?var=572983964495&_trkparms=aid%3D222007%26algo%3DSIM.MBE%26ao%3D2%26asc%3D20160908110712%26meid%3D5dfe02af99d7451b86a92c944d33fd48%26pid%3D100677%26rk%3D11%26rkt%3D30%26sd%3D302951701624%26itm%3D572983964495&_trksid=p2385738.c100677.m4598" target="_blank" ><img src="css/img/iphone10.png" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$949.00</p>
                  </a>  
              </div>
          </div>
        `;
        }
        else if(query === "Macbook Pro" || query === "macbook pro" || query ==="Macbook pro"){
          document.getElementById("box-fill").innerHTML = 
          `
              <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.apple.com/ca/shop/buy-mac/macbook-pro/13-inch-space-grey-2.3ghz-dual-core-128gb?afid=p238%7CsflHk1Tl7-dc_mtid_1870765e38482_pcrid_142913545083_&cid=aos-CA-kwgo-pla-brand--slid--product-MPXQ2LL/A-CA" target="_blank" ><img src="css/img/macbook.jpg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,729.00</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.apple.com/ca/shop/product/FPXV2LL/A/Refurbished-133-inch-MacBook-Pro-31GHz-dual-core-Intel-Core-i5-with-Retina-display-Space-Gray?afid=p238%7CsflHk1Tl7-dc_mtid_1870765e38482_pcrid_142913545083_&cid=aos-CA-kwgo-pla-brand--slid--product-FPXV2LL/A-CA" target="_blank" ><img src="css/img/macbook.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,899.00</p>
                  </a>
              </div>
          </div>
          <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.apple.com/ca/shop/buy-mac/macbook-pro/13-inch-space-grey-256gb-2.3ghz-quad-core?afid=p238%7CsflHk1Tl7-dc_mtid_1870765e38482_pcrid_142913545083_&cid=aos-CA-kwgo-pla-brand--slid--product-MR9Q2LL/A-CA" target="_blank" ><img src="css/img/macbook.jpg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$2,399,00</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.amazon.com/Apple-MacBook-Display-Graphics-MJLQ2LL/dp/B00XZGMBVC" target="_blank" ><img src="css/img/macbook.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,799.00</p>
                  </a>
              </div>
          </div>
          <div class="row">
              <div class="col-6" style="margin-left:155px;">
                  
                  <a href="https://www.amazon.com/dp/B07FKBP4HS/ref=macbook_air_13inch_touch_bar?th=1" target="_blank" ><img src="css/img/macbook.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$1,989.00 </p>
                  </a>  
              </div>
          </div>
        `;
        }
        else if(query === "Apple Watch" || query === "Apple watch" || query ==="apple watch"){
          document.getElementById("box-fill").innerHTML = 
          `
              <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.apple.com/ca/shop/buy-watch/apple-watch/40mm-gps-gold-aluminium-pink-sand-sport-band?afid=p238|sflHk1Tl7-dc_mtid_1870765e38482_pcrid_142913545083_&cid=aos-CA-kwgo-pla-brand--slid--product-MU682VC/A-CA" target="_blank" ><img src="css/img/watch.jpg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$519.00</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.staples.ca/en/apple-watch-series-2-42mm-space-grey-aluminium-case-black-sport-band-mp062cl-a/product_2707179_1-CA_1_20001?CID=PS:GS:CA::pla-562526975433::58910733093::1558676762&CampaignID=1558676762&gclid=EAIaIQobChMIy_eNkobv3gIVjMDACh0lmwexEAQYAyABEgJbaPD_BwE" target="_blank" ><img src="css/img/watch.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$409.97</p>
                  </a>
              </div>
          </div>
          <br>
          <br>
          <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.sportchek.ca/product/332504914.html?gclid=EAIaIQobChMI7K32oYfv3gIVC77ACh1_JAKvEAQYBCABEgLmsfD_BwE&gclsrc=aw.ds#332504914=332504916" target="_blank" ><img src="css/img/watch.jpg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$499.00</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.bestbuy.ca/en-ca/product/apple-watch-series-4-gps-44mm-space-grey-aluminium-case-with-black-sport-band/13018343.aspx?" target="_blank" ><img src="css/img/watch.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$559.00</p>
                  </a>
              </div>
          </div>
          <br>
          <br>
          <div class="row">
              <div class="col-6" style="margin-left:155px;">
                  
                  <a href="https://www.bestbuy.ca/en-ca/product/apple-watch-series-4-gps-40mm-space-grey-aluminium-case-with-black-sport-band/13018337.aspx?" target="_blank" ><img src="css/img/watch.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$519.99 </p>
                  </a>  
              </div>
          </div>
        `;
        }
        else if(query === "iphone charger" || query === "Iphone Charger" || query ==="Iphone charger"){
          document.getElementById("box-fill").innerHTML = 
          `
              <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.google.com/shopping/product/9480159837361097251?lsf=seller:8985342,store:6530477067855759525,lsfqd:0&prds=oid:12459719190884570716&q=Storage+%26+Data+Transfer+Cables&hl=en&ei=zFT6W-6pCozOjwTAr6OoAg&lsft=gclid:EAIaIQobChMIjqSmg4jv3gIVl7XACh3hkQ6jEAQYASABEgLUSPD_BwE" target="_blank" ><img src="css/img/charger.jpg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$14.50</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.apple.com/ca/shop/product/MQUE2AM/A/lightning-to-usb-cable-1m?afid=p238%7CsflHk1Tl7-dc_mtid_1870765e38482_pcrid_142913545083_&cid=aos-CA-kwgo-pla-brand--slid--product-MQUE2AM/A-CA" target="_blank" ><img src="css/img/charger.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$25.00</p>
                  </a>
              </div>
          </div>
          <div class="row">
              <div class="col-6 ">
                  
                  <a href="https://www.amazon.ca/AmazonBasics-Nylon-Braided-Lightning-Compatible/dp/B01F9RG3ZE/ref=asc_df_B01F9RG3ZE/?tag=googleshopc0c-20&linkCode=df0&hvadid=292943518457&hvpos=1o4&hvnetw=g&hvrand=1827007956034527062&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9060195&hvtargid=pla-300443508195&psc=1" target="_blank" ><img src="css/img/charger.jpg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$11.04</p>
                  </a>
                  
                  
              </div>
              <div class="col-6 ">
                  <a href="https://www.bestbuy.ca/en-ca/product/apple-1m-3-3-ft-lightning-to-usb-2-0-cable-mque2am-a/12547281.aspx?" target="_blank" ><img src="css/img/charger.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$24.99</p>
                  </a>
              </div>
          </div>
          <div class="row">
              <div class="col-6" style="margin-left:155px;">
                  
                  <a href="https://www.thesource.ca/en-ca/audio--and--headphones/ipod-devices,-mp3-players--and--accessories/ipod-accessories/apple%C2%AE-1m-(3-3%27)-lightning-to-usb-cable/p/108006060?bid=sPexa3Rar8sw&ds_rl=1227070&gclid=EAIaIQobChMIiJ-Cp4nv3gIVD57ACh0aMAWSEAQYAyABEgKc7_D_BwE&gclsrc=aw.ds" target="_blank" ><img src="css/img/charger.jpg" style="width:80%; height:70%;" class="img-fluid ">
                      <p style="margin-left:45px; font-size: 26px;">${query}</p>
                      <p style="margin-left:45px; font-size: 24px;">Price:$19.99 </p>
                  </a>  
              </div>
          </div>
        `;
        }
        else{
          alert("Error! Either you don't have conncetion, or out of API calls or you typed the wrong name.")
        }
        
        })
        .catch(console.error)
      
    }
})
