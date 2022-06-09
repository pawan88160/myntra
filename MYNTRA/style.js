let a;
let menbtn = document.getElementById("men-btn");
let MENarea = document.getElementById("MEN-area-containor");
menbtn.addEventListener('click',function(){
  if(a==1){
    MENarea.style.display="flex";
    return a=0;

}else{MENarea.style.display="none";
          return a=1;    
}
});

let b;
let womenbtn = document.getElementById("womenbtn");
let womenarea = document.getElementById('womenarea');
womenbtn.addEventListener('click',function(){
  if(b==1){
    womenarea.style.display="flex";
    return b=0;
  }else{womenarea.style.display='none';
       return b=1;
}
})

let c;
let kidbtn = document.getElementById("kidbtn");
let kidsarea = document.getElementById('kids-area');
kidbtn.addEventListener('click',function(){
  if(c==1){
    kidsarea.style.display="flex";
    return c=0;
  }else{kidsarea.style.display='none';
       return c=1;
}
})


let d;
let homebtn = document.getElementById('homebtn');
let homearea = document.getElementById('homearea');
homebtn.addEventListener('click',function(){
  if(d==1){
    homearea.style.display="flex";
    return d=0;
  }else{
    homearea.style.display='none';
    return d= 1;
  }
})

let e;
let beautybtn  = document.getElementById('beautybtn');
let beautyarea  = document.getElementById('beautyarea');
beautybtn.addEventListener('click',function(){
  if(e==1){
    beautyarea.style.display="flex";
    return e=0;
  }else{
    beautyarea.style.display="none";
    return e=1;
  }
})

let f;
let studiobtn  = document.getElementById('studiobtn');
let studioarea  = document.getElementById('studioarea');
studiobtn.addEventListener('click',function(){
  if(f==1){
    studioarea.style.display="block";
    return f=0;
  }else{
    studioarea.style.display="none";
    return f=1;
  }
})

///////////////////////////////////////////////////////////

let imgarr=["https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/c89495bf-c1f3-4c0f-862b-8a3c223d4a561653399091454-Sports---Casual-Shoes_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/4d15bdb4-50c2-4fac-a90c-76a5b9a022f61653399091429-Travel-Fest_Desktop.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/74644e94-624e-4bda-9399-a2d98be825b01652014215365-Flip-Flops_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/c8e64e6b-4e58-45bb-9999-1f323aa7dc601652014311422-Sportswear_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/5a2ed72f-ebad-49ac-ac9c-9f74fd3d7cf21652014382130-Backpacks---Luggage_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/fc651726-6c39-4ad5-87b0-190d8a0f753b1652014505698-Innerwear_Dk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ba5790ef-6bfe-427c-8b13-739320e1cba11652015668956-Kurtas---Sets_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ba5790ef-6bfe-427c-8b13-739320e1cba11652015668956-Kurtas---Sets_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/b83abadd-48d9-4df9-93fa-6a0d090d5ee31652015784857-Trendy-Heels_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/1b45434b-03f8-4fd2-a63b-520aa1b9064e1652015899954-Flip-Flops_Desk--1-.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/1b45434b-03f8-4fd2-a63b-520aa1b9064e1652015899954-Flip-Flops_Desk--1-.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/c895d896-d387-497a-91d5-c07d7edf4a951652016060104-Wardrobe-Essentials_Desk.jpg",
             "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/8/ca060c20-3c8d-44d6-b852-beaf3d0cf0a41652028231412-Handbags---Clutches_Desk.jpg",
           ]

i=0;
function slider(){
  document.getElementById('imgslider').src=imgarr[i];
  if(i<imgarr.length-i){
    i++
  }else{i=0}
}setInterval(slider,5000);

let btnn = document.getElementById("btn1");

///////////////////////////////////////////////////////

let btnin = document.getElementById('btnin');
let odderslider = document.getElementById('odderslider');
let offer = document.getElementById('odderslider');
btnin.style.position='absolute';
btnin.style.right='0%';
let off;
offer.style.backgroundImage='linear-gradient(270deg,#fef9e5,#fde3f3)';
btnin.addEventListener("click",function(){
    offer.style.display="inline-block";
  offer.style.backgroundImage=`linear-gradient(none)`;
  offer.classList.replace("fa-angle-right","fa-angle-left");
  offer.style.backgroundColor="white";
  btnin.style.right='92%';
  btnin.style.display='flex';
})
console.log(btnin)

///////////////////////////////////////////daysale////////////////////////////////////////////////////////

function daysale(){
  let store1 ='';
  let daysal = ['https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/5250f1a1-4988-4db7-b892-199f38316f961654098449744-Shirts--1-.jpg',
               'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/b0b80df7-c70a-4819-8ac6-2c6815cd63c81654098506300-Best-Of-Sarees--1-.jpg',
               'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/5d972cf2-a6f8-4dec-9df8-0c1e841ad2501654098580425-Best-Of-Kurta-Sets.jpg',
               'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/2e157974-defa-4522-af28-7eb0d8ce9c411654098609048-Airdopes-441.jpg',
               'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/3f8486f9-fe00-40c2-903c-51151ce1c1261654098635872-Flats---Heels.jpg',
               'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/04d8e4e6-ae47-46bc-8a3c-4ddb919854dd1654098661836-Cotton-Bedsheets--1-.jpg',
               'https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/f5058f4e-ebef-4452-867c-2c165693e31c1654098707854-Makeup--2-.jpg'
              ];
  
  let daysale = document.getElementById('daysale');
  for(i=0;i<daysal.length;i++){
  store1+=`<a href="#"><img src=${daysal[i]}></a>`
  }
  daysale.innerHTML=store1
  console.log(store1)
}daysale();

//////////////////////////////////////////////////////////////////////////////////EXCLUSIVE-BRANDS//////////////////////////////////////

function EXCLUSIVEBRANDS(){
  let EXCLUSIVEBRANDS = document.getElementById('EXCLUSIVE-BRANDS');
  let BRANDS =['https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/b25f89eb-fbeb-4013-829e-32ee5b5daaa01646895183668-Roadster-HRX_Unisex.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/bfa5c871-a5a5-4d81-b46e-18aedccfdc9b1644407437913-Kurta_sets-_Anouk-_AAY_-_more.jpg',
               "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/046147d1-1874-4c10-adb9-6dbd88b606e71644407437923-Kurtas-_Anouk-_Sangria_-_more.jpg",
               "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/76acf345-fc62-4b49-8b2c-9c0fc9c925311644407437977-Tops_-_Dressberry-_AAY_-_more.jpg",
               "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3923c0c1-2260-4f0e-9598-15b6f9d7731c1644407437960-Roadster_and_H-N_Shirts.jpg",
               "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eb70855e-98c4-412d-bf20-50804546d57e1644407437883-Dresses_-_Dressberry-_Chemistry_-_more.jpg",
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/eff5a33f-ea24-4e70-84e5-ec4d25ee5c7b1644407437968-Roadster_and_KnK_Tshirts.jpg',
               "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/667a71f0-c24b-4a00-a98c-cc6a54a815e91644407437985-Tshirts_-_Roadster-_KnK_-_more.jpg",
               "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/ffaa74a6-4824-4b19-8936-70ffaef92f001644407437937-M-H_and_HRX_Tshirts.jpg",
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/f9621136-0f00-44d5-aa06-b727a6c8f7c51644407437944-M-H_and_Wrogn_Shirts.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/3f41465b-7109-4bb2-bf79-ab89ff2128be1644407437899-HRX_and_Harvard_Trackpants.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/e27ee3af-3f6b-4106-9b20-2b4463c80ba41644407437953-Roadster-_Wrogn_Jeans.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/2b15a87a-1d92-4edf-99c2-ec390a38089e1644407437872-Activewear_-_HRX-_Slazenger.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/931b0b8f-c14d-4ec7-b923-cf512de991731644407437891-HOP_and_Anouk_Kurtas_-_sets.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/9/201d1bfd-287e-47b6-bef6-3c46eac444a51644407437906-Jeans_-_Roadster-_M-H_and_more.jpg'     
              ];
              let store='';
              for(i=0;i<BRANDS.length;i++){
                store+=`<a href="#"><img src=${BRANDS[i]}></a>`
              }
              EXCLUSIVEBRANDS.innerHTML=store;
}EXCLUSIVEBRANDS();


////////////////////////////////////////////////////brand-section/////////////////////////////////



  var store =''
  let brandimg = document.getElementById('brandiimg');
  let brand =[
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/814b8ff4-1dec-4a6e-86b8-c26f5c40fe4c1598892518923-Biba.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/48aa9321-1906-4471-be70-20ef124459971598892519217-M_S.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3f125d86-5139-4ee2-8561-5a610c2624421598892519314-Only.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/90c35c24-ac69-4472-a1a0-be82c087ec181598892519026-F21.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/61c793f2-399c-4b8a-9e93-831adef697381598892519164-Levis.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8f070770-db34-4e20-ab80-59728106460a1598892519078-GAP.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike.jpg',
    'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg' ,
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2021/11/12/2d4b2a2c-9332-4844-bb32-6ccf0e35fef21636697516790-Urbanic-1.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/28/529db52b-ba58-423a-9ad6-3161ef642dff1598605975128-Women-s-Ethnic-Wear---Anouk.png",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/7c774b84-f2ec-4a3f-9208-8ba663ee4c221602086685157-hereand-now-men.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/99f75f40-4d3f-4049-87da-be2662359aca1602087172072-sangriawomen.jpg",
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"
   ]
   for( i=0;i<brand.length;i++){
    store+=`<a href="#"> <img src=${brand[i]}> </a>`
   };
   brandiimg.innerHTML=store;




   ///////////////////////////////////////////////////////CATEGORIES TO BAG////////////////////////////////////////////////////


   function CATEGORIESTOBAG(){
    let CATEGORIES = document.getElementById('CATEGORIESTOBAG');
    let tobag=['https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg',
               'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg'
              ];
    let store='';
    for(i=0;i<tobag.length;i++){
      store+=`<a href="#"> <img src=${tobag[i]}> </a>`
    }
    CATEGORIES.innerHTML=store;
   }CATEGORIESTOBAG();
  

/////////////////////////////////////MYNTRA LUXE///////////////////



function MYNTRALUXE(){
  let MYNTRALUXE = document.getElementById('MYNTRALUXE');
  let  LUXE=['https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/8c07792e-bbf9-4935-8d9c-3a6a66eba4f01636726166240-HP-DKNY.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/1cbf16e3-afe2-4013-af4d-4e427f1e30ee1636726166266-HP-Junghans.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/98b141e0-8d71-4e1b-8afa-49d1b7113a141636726166278-HP-Luxe.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/9c262136-abbd-4087-9267-bc1f3b90b3c01636726166303-HP-RaymondWeil.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/5158cd92-89b5-452e-97c5-938bdf63516e1636726166284-HP-Movado.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/4fac3c61-9e54-486c-a083-6f61df81436c1623933299972-HPCarouselVisibility-MyntraLuxe-Tissot.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/65d5107e-35cf-4176-aef3-b7ae77dd09761636726166252-HP-FredPerry.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/9b04f96a-f1ed-4edc-8840-483719055fdb1623940080549-HPCarouselVisibility-MyntraLuxe-ExploreStore.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/6eaf8591-e92b-4ab3-a4e5-f38caac6c7d91636726166295-HP-POLORalphLauren.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/7e273a5a-9372-4956-af96-38aa903668201636726166272-HP-KarlLagerfeld.jpg',
            'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/6/17/bfa35f05-88b3-419f-af88-83c2ea0483f91623933299966-HPCarouselVisibility-MyntraLuxe-Tedbaker.jpg'
            ,"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/12/884c0181-9da3-43c4-89f5-8696b97ec7751636726166246-HP-Dyson.jpg"
            ];
  let store='';
  for(i=0;i<LUXE.length;i++){
    store+=`<a href="#"> <img src=${LUXE[i]}> </a>`
  }
  MYNTRALUXE.innerHTML=store;
 }MYNTRALUXE();


////////////////////////////////////////UNMISSABLE////////////////////////////////////////////////////////////

function UNMISSABLE(){
    let UNMISSABLE = document.getElementById('UNMISSABLE');
    let UNMISSABL =['https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1ec9ffd5-335f-4ecb-a7e9-ea403da9a7df1645805770868-SS22-SeasonChecklist-PricePoints-CleanBlueDenim.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1ec9ffd5-335f-4ecb-a7e9-ea403da9a7df1645805770868-SS22-SeasonChecklist-PricePoints-CleanBlueDenim.jpg',
    
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1ec9ffd5-335f-4ecb-a7e9-ea403da9a7df1645805770868-SS22-SeasonChecklist-PricePoints-CleanBlueDenim.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/99a29231-2050-4fde-ad40-efa35de66e5b1645805770994-SS22-SeasonChecklist-PricePoints-TrendySneakers.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/bdde4d47-9908-4764-b09e-5a55034e32b01645793729554-SS22-SeasonChecklist-Trending-Loungewera.jpg',
    
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/bdde4d47-9908-4764-b09e-5a55034e32b01645793729554-SS22-SeasonChecklist-Trending-Loungewera.jpg',
    
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/bdde4d47-9908-4764-b09e-5a55034e32b01645793729554-SS22-SeasonChecklist-Trending-Loungewera.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/6bcf042c-5f07-47e2-a1cb-3da58c4f94951645793729590-SS22-SeasonChecklist-Trending-SlipOns.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/50c525cc-6724-4d41-9e97-5b931a33631b1645806100291-SS22-SeasonChecklist-AddOns-New-Season-Wallets_.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/62ef932d-b023-4c34-b649-bc3b399057a31646114955627-SS22-SeasonChecklist-Styling-Women-Kurtas.jpg',
    
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/62ef932d-b023-4c34-b649-bc3b399057a31646114955627-SS22-SeasonChecklist-Styling-Women-Kurtas.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/518f4774-cd01-4076-b2ee-03170d232c161645793729608-SS22-SeasonChecklist-Trending-Stylecast.jpg'
                   ]

   let store='';
   for(i=0;i<UNMISSABL.length;i++){
    store+=`<a href="#"><img src=${UNMISSABL[i]}></a>`
   } 
   UNMISSABLE.innerHTML=store
}UNMISSABLE()


///////////////////////////////TRENDING OUTFITS BY INFLUENCERS/////////////////////////

function TRENDING(){
  let TRENDING = document.getElementById('TRENDING');
  let TREND=[
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg',
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg",
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg',
    
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg',
    'https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg',
    "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg"
  ];
  let store ='';
  for(i=0;i<TREND.length;i++){
    store+=`<a href="#"><img src=${TREND[i]}></a>`
  }
  TRENDING.innerHTML=store
}TRENDING();









