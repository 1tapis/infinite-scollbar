import React, { useEffect } from 'react'

const Post = ({data,setPageNo}) => {
    console.log(data);
    useEffect(()=>{
        const observer = new IntersectionObserver((param)=>{
            console.log(param);
            if(param[0].isIntersecting){
                observer.unobserve(lastImage);
                setPageNo((pageNo)=>pageNo+1);
            }
        },{threshold:0.5})

        const lastImage = document.querySelector(".image-post:last-child");
        console.log(lastImage);
        if(!lastImage){
            return;
        }
        observer.observe(lastImage);

        return ()=>{
            if(lastImage){
                observer.unobserve(lastImage);
            }
            observer.disconnect();
        }
    },[data])
  return (
    <div className='container'>
       { 
            data.map((item,idx) =>{
                return(
                    <img className='image-post' key={idx} src={item.download_url} alt="" />
                )
            })
        }
    </div>
  )
}

export default Post;
