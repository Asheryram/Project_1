function generateIDCard() {
    var name = document.getElementById("name").value;
    var college = document.getElementById("college").value;
    var location = document.getElementById("location").value;
    var cardDetails = document.getElementById("cont_221");
   
    var picture = document.getElementById("picture").files[0];

  var reader = new FileReader();
  reader.onload = function(e) {
    var profilePic = document.getElementById("profilePic");
    profilePic.src = e.target.result;
  };
  reader.readAsDataURL(picture);

    cardDetails.innerHTML = `
    <div id="cont_2211" class="f-center">
                        <h3> Generated ID Card</h3>
                    </div>
                    <div id="cont_2212"  style="margin: 15px 0; border-radius: 20px;">
                        <div  class="f-center">
                            <div id="cont_22121" class=" flex  ">
                                <div id="image" style="border-radius: 20px; margin-right:10px;" ><img id="profilePic" src="" alt="Profile Picture" height="150px">
                                </div>
                                <div id="cardDetails" style="height: 130px;" class="f-center" >
                                  
                                    <div >
                                        <div  class="text-w" style="width:200px;">
                                            <span class="flex">Name:<strong>${name}</strong> </span>
                                            <span class="flex">College:<strong>${college}</strong> </span>
                                            <span class="flex">Location:<strong>${location}</strong> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
    `;

  }
  