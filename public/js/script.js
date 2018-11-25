
const search_buton = document.querySelector(".search__btn");


//th search button , once clicked
search_buton.addEventListener("click",(e)=>{
  e.preventDefault();
  
    //read the value of the text field
    let query = document.querySelector(".search__field").value;

     query = query.toLowerCase();
    if(query) {
      document.querySelector(".video-test-animated").style.display = "none";
      document.querySelector(".video-size").style.display = "none";

      
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
          else if(query === "beats 3" || query === "Beats 3" || query ==="Solo Beats 3" || query ===" Solo beats 3" || query ==="solo beats 3"){
            document.getElementById("box-fill").innerHTML = 
            `
                <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.staples.ca/en/Beats-Solo3-Wireless-On-Ear-Headphones-Black-MP582LLA/product_2454059_1-CA_1_20001?CID=PS:GS:CA:b:dsa-441574470637::54049798957::1352059385&CampaignID=1352059385&gclid=EAIaIQobChMI7bO4zM3v3gIV2LXACh1VbQqhEAAYAiAAEgIayfD_BwE" target="_blank" ><img src="css/img/beats.jpeg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$229.99</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.apple.com/ca/shop/product/MP582/beats-solo3-wireless-on-ear-headphones-matt-black" target="_blank" ><img src="css/img/beats.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$329.95</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphones/dp/B01LRK9DTA" target="_blank" ><img src="css/img/beats.jpeg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$239.95</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.bestbuy.ca/en-ca/product/beats-by-dr-dre-beats-by-dr-dre-solo3-on-ear-sound-isolating-bluetooth-headphones-rose-gold-mnet2ll-a/10488057.aspx?&cmp=knc-s-71700000010476690&gclid=EAIaIQobChMIyODfr9Dv3gIVhbrACh2PiQvxEAYYAyABEgIRE_D_BwE&gclsrc=aw.ds" target="_blank" ><img src="css/img/beats.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$249.99</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6" style="margin-left:155px;">
                    
                    <a href="https://www.walmart.ca/en/ip/beats-by-dr-dre-beats-solo3-wireless-headphones-gloss-black-rose-gold/6000196380890?cmpid=sem_google_en_none_search_869128514_43896172956&gclid=EAIaIQobChMIyODfr9Dv3gIVhbrACh2PiQvxEAYYBCABEgL0SvD_BwE" target="_blank" ><img src="css/img/beats.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$329.94 </p>
                    </a>  
                </div>
            </div>
          `;
        }
        else if(query === "canon camera" || query === "Canon Camera" || query ==="Canon camera" || query ==="canon Camera" || query ==="Camera"){
            document.getElementById("box-fill").innerHTML = 
            `
                <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.walmart.ca/en/ip/canon-eos-rebel-t100-ef-s-18-55mm-f35-56-iii/6000198284189?cmpid=sem_google_en_none_search_1639461266_66629995110&gclid=EAIaIQobChMIxZGAhdLv3gIVQ57ACh3MYwlREAYYASABEgJrkPD_BwE" target="_blank" ><img src="css/img/canon.jpeg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$368.00</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.thesource.ca/en-ca/cameras--and--camcorders/digital-slr-cameras/dslr-bundles/canon-eos-rebel-t100-18mp-dslr-camera-with-ef-s-18-55mm-f-3-5-5-6-iii-lens-%E2%80%93-black/p/108075440?bid=sPexa3Rar8sw&gclid=EAIaIQobChMIxZGAhdLv3gIVQ57ACh3MYwlREAYYAiABEgKyB_D_BwE&gclsrc=aw.ds" target="_blank" ><img src="css/img/canon.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$349.99</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.amazon.ca/Canon-Digital-18-55mm-3-5-5-6-5169B004/dp/B004J3V90Y" target="_blank" ><img src="css/img/canon.jpeg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$439.00</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.staples.ca/en/canon-eos-rebel-t100-digital-slr-camera-18-mp-ef-s-18-55mm-f-3-5-5-6-dc-iii-kit/product_2870740_1-CA_1_20001" target="_blank" ><img src="css/img/canon.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$399.99</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6" style="margin-left:155px;">
                    
                    <a href="https://www.bestbuy.ca/en-ca/product/canon-eos-rebel-t6-dslr-camera-wtih-18-55mm-lens-accessory-kit-open-box/10737454.aspx?" target="_blank" ><img src="css/img/canon.jpeg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$379.99 </p>
                    </a>  
                </div>
            </div>
          `;
        }
        else if(query === "beats speaker" || query === "Beats Speaker" || query ==="Beats By Dre Speakers" || query ==="Beats by dre speakers" || query ==="Beats speaker"  || query ==="bluetooth speaker"){
            document.getElementById("box-fill").innerHTML = 
            `
                <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.bestbuy.ca/en-ca/product/beats-by-dr-dre-beats-by-dr-dre-pill-bluetooth-wireless-speaker-black-ml4m2ll-a/10398561.aspx?&cmp=knc-s-71700000010728332&gclid=EAIaIQobChMIprW6sNfv3gIVELXACh2ZjwjlEAYYASABEgImCPD_BwE&gclsrc=aw.ds" target="_blank" ><img src="css/img/speakers.jpg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$129.00</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.sportchek.ca/product/332458870.html?gclid=EAIaIQobChMIprW6sNfv3gIVELXACh2ZjwjlEAYYAiABEgJUFvD_BwE&gclsrc=aw.ds#332458870=332458872" target="_blank" ><img src="css/img/speakers.jpg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$174.99</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.thesource.ca/en-ca/audio--and--headphones/portable-audio/all-bluetooth-speakers/beats-pill%E2%81%BA-bluetooth-portable-speaker---black/p/108041725?bid=sPexa3Rar8sw&ds_rl=1227070&gclid=EAIaIQobChMIprW6sNfv3gIVELXACh2ZjwjlEAYYBCABEgL4I_D_BwE&gclsrc=aw.ds" target="_blank" ><img src="css/img/speakers.jpg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$199.99</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.apple.com/ca/shop/product/ML4M2LL/A/beats-pill-portable-speaker-black?afid=p238%7CsF9EJrKLw-dc_mtid_1870765e38482_pcrid_204238781435_&cid=aos-CA-kwgo-pla-btb-3pp--slid--product-ML4M2LL/A-CA" target="_blank" ><img src="css/img/speakers.jpg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$249.95</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6" style="margin-left:155px;">
                    
                    <a href="https://www.walmart.ca/en/ip/beats-by-dr-dre-beats-pill-bluetooth-speaker-black/6000195528216?cmpid=sem_google_en_none_search_869128514_43896172956&gclid=EAIaIQobChMIprW6sNfv3gIVELXACh2ZjwjlEAYYAyABEgLa9fD_BwE" target="_blank" ><img src="css/img/speakers.jpg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$249.94 </p>
                    </a>  
                </div>
            </div>
          `;
        }
        else if(query === "Samsung 32" || query === "samsung 32" || query ==="Samsung Tv 32" || query ==="samsung Tv 32"){
            document.getElementById("box-fill").innerHTML = 
            `
                <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.visions.ca/catalogue/category/details.aspx?productId=38285&categoryId=0&gclid=EAIaIQobChMIjuuTwNvv3gIVwrrACh2H6ge_EAYYAiABEgJ2nvD_BwE" target="_blank" ><img src="css/img/samsung.jpg" style="width:80%; height:70%; margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$298.00</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.walmart.ca/en/ip/samsung-32-hd-led-tv-un32j4000/6000193219023?cmpid=sem_google_en_none_search_1588451175_65634798851&gclid=EAIaIQobChMIpe2rttvv3gIVhYbACh1RZATIEAYYBCABEgLXzPD_BwE" target="_blank" ><img src="css/img/samsung.jpg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$298.00</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6 ">
                    
                    <a href="https://www.bestbuy.ca/en-ca/product/samsung-32-1080p-hd-led-tizen-smart-tv-un32n5300afxzc-glossy-black/12471898.aspx?&cmp=knc-s-71700000008429711&gclid=EAIaIQobChMIhqmK8tzv3gIVB7XACh3VEATKEAQYBCABEgJ98_D_BwE&gclsrc=aw.ds" target="_blank" ><img src="css/img/samsung.jpg" style="width:80%; height:70%;  margin-left: 25px;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$399.99</p>
                    </a>
                    
                    
                </div>
                <div class="col-6 ">
                    <a href="https://www.walmart.ca/en/ip/samsung-32-curved-monitor-1920x10804ms60hz-lc32f391fwnxza/PRD27A2X308ONR2?cmpid=sem_google_en_none_search_1582658809_65410443491&gclid=EAIaIQobChMIhqmK8tzv3gIVB7XACh3VEATKEAQYBSABEgK_EvD_BwE" target="_blank" ><img src="css/img/samsung.jpg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$249.96</p>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-6" style="margin-left:155px;">
                    
                    <a href="https://www.bestbuy.ca/en-ca/product/samsung-32-inch-1080p-60-mr-led-smart-tv-un32m5300-un32m530d-refurbished/12277536.aspx?icmp=Recos_4across_cstmrs_ls_vwd" target="_blank" ><img src="css/img/samsung.jpg" style="width:80%; height:70%;" class="img-fluid ">
                        <p style="margin-left:45px; font-size: 26px;">${query}</p>
                        <p style="margin-left:45px; font-size: 24px;">Price:$339.99 </p>
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
