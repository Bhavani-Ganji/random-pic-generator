import React from 'react';
import './App.css';
import {useState } from "react";






const images2 =[
    'https://www.careerindia.com/img/2020/10/abdulkalamquotesaboutlife-1602703475.jpg',
    'https://m.media-amazon.com/images/I/81NP4r4vMpL._SX466_.jpg',
    'https://cn.i.cdn.ti-platform.com/cnemea/content/384/showpage/tom-and-jerry/uk/showsquare.png',
    'https://www.theartist.me/wp-content/uploads/2020/03/who-is-frida-kahlo-1024x683.jpg',
    'https://assets-news.housing.com/news/wp-content/uploads/2021/06/14175932/A-guide-to-water-conservation-methods-and-its-importance-FB-1200x700-compressed.jpg',
    'https://images.onlymyhealth.com/imported/images/2016/February/18_Feb_2016/treadmill-and-health-club.jpg-650x433.jpg',
    'https://cff2.earth.com/uploads/2018/11/12235505/what-is-rain.jpg',
    'https://www.news-medical.net/images/news/ImageForNews_730896_16683922383473142.jpg',
    'https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/07/DestinationsNearDelhi_1-1.jpg',
    'https://thumbs.dreamstime.com/b/stack-hands-showing-unity-teamwork-close-up-top-view-young-people-putting-their-together-friends-79575615.jpg',
    'https://c0.wallpaperflare.com/preview/7/882/486/market-supermarket-grocery-store-shop.jpg',
    'https://www.maketecheasier.com/assets/uploads/2021/01/fix-blurry-pictures-android-featured.jpg',
    'https://gumlet.assettype.com/filmcompanion%2F2023-01%2Fe0bcd540-a7b4-41db-9e82-f2e4e55adb47%2FRRR_oscar_lead_natu_natu.jpg?auto=format%2Ccompress&fit=max&w=1200',
    'https://images.hindustantimes.com/img/2021/03/25/1600x900/20210325_DLI-SKH-MN_Rajiv_Chowk-02_1616705266511_1616705292315.jpg',
    'https://imagevars.gulfnews.com/2019/07/07/OPN-190707-CUFF-1562494147630_16bcbe89c2f_medium.jpg',
    'https://previews.123rf.com/images/mimagephotography/mimagephotography1307/mimagephotography130700387/21299788-portrait-of-a-happy-mother-teaching-baby-to-walk-in-the-park.jpg',
    'https://i.pinimg.com/736x/7b/62/92/7b6292abb7f1e48f013a6bf69abe4eb0.jpg',
    'https://fancyodds.com/wp-content/uploads/2022/01/Indian-Cricket-Team-Images-5.jpg',
    'https://wallpaperaccess.com/full/1552690.jpg',
    'https://wallpaperaccess.com/full/527062.jpg',
    'https://wallpapercave.com/wp/wp2700496.jpg',
    'https://c4.wallpaperflare.com/wallpaper/656/627/785/babe-fitness-mood-sexy-wallpaper-preview.jpg',
    'https://i.pinimg.com/736x/07/02/b9/0702b93743d48b8c3dda861c77a76a07.jpg',
    'https://w0.peakpx.com/wallpaper/915/442/HD-wallpaper-farmer-field-cows-farming-farm-ploughing-cattle-india-cultivation-indian.jpg',
    'https://c4.wallpaperflare.com/wallpaper/30/326/458/gifts-boxes-set-bright-wallpaper-preview.jpg',
    'https://media.glassdoor.com/l/31/77/b7/07/office-from-inside.jpg',
    'https://previews.123rf.com/images/shalamov/shalamov1504/shalamov150400050/38857442-back-view-of-a-happy-family-at-tropical-beach-on-summer-vacation.jpg',  
    'https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2UlMjBwbGFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pqns9Q8tPC5cGie5HYBU_uescEF5PtzBHQ&usqp=CAU',
    'https://images7.alphacoders.com/536/536269.jpg',
    'https://newsonair.com/wp-content/uploads/2023/01/corona-696x438.jpeg',
    'https://images4.alphacoders.com/155/155636.jpg',
    ];
  const picturesDisplayed=[];
  let Displayed;
function RandomImage() {
    const [currentImage, setCurrentImage] = useState()
    function getRandomImage() {
      const index = Math.floor(Math.random() * images2.length)
      Displayed = images2[index];
      images2.splice(index ,1 );
      picturesDisplayed.push(Displayed);
      return Displayed;
    }
  
    return (
  <>
  <div>
    <h1>ZELAR ELOQUENT SPEAKERS</h1>
  
      </div>
      <center>
        {!picturesDisplayed.length&&<button className="btn" onClick={() => setCurrentImage(getRandomImage())}>Generate Random Image</button>}
      {currentImage&& <img className='image' src={currentImage} onClick={() => setCurrentImage(getRandomImage())} />}
      </center></>
    )
}
export default RandomImage;