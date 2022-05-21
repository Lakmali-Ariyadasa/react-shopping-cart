import React from 'react';
import NameListItem from './NameListItem';

function NameList(){
    const nameList =[{
        id:0,
        name: {first: "2022 Spring and Autumn Korean Version V-neck Bow Knot Hollow Grid Solid Color",last:"Shirt Ladies Puff Sleeve Women Casual Top Female"}, 
        description : {details: "kilcoole"},
        price:{lkr: "1750.00"},
        picture: { medium: "https://ae01.alicdn.com/kf/S9a20ee1ed80f43ad852b76f4f3e0e1a0K/2022-Spring-and-Autumn-Korean-Version-V-neck-Bow-Knot-Hollow-Grid-Solid-Color-Shirt-Ladies.jpg_220x220xz.jpg_.webp"},
    },
    {
      id:1,
      name: {first: "Women 2 Pieces Sets 2021 Spring Solid Tops Shirt Blouse",last:"Long Wide Leg Pants Trousers Office Lady Two Piece Suits"}, 
      description : {details: "kilcoole"},
      price:{lkr: "2250.00"},
      picture: { medium: "https://ae01.alicdn.com/kf/S2248e3932e134fa2a43c4fc6b57e1ba5g/Elegant-Women-s-summer-blouses-fashion-new-casual-woman-tops-women-2021-polka-dot-White-shirt.jpg_220x220xz.jpg_.webp"},

  }];

const productListComponent = () =>{
  return nameList.map(aname=>{
    return(
      <NameListItem 
            key={aname.id}
            name = { aname.name.first + ' ' + aname.name.last}
            details ={aname.description.details}
            price={aname.price.lkr}
            avatar = {aname.picture.medium}/>
    );
  });
};  
  return(
    <React.Fragment>
      <div className="container mt-4">
        <ul className="list-group">  
            {productListComponent()}
        </ul>
      </div>            
    </React.Fragment>
    )
}

export default NameList;