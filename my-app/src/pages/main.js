import { React, useEffect, useState } from "react";
import "../styles/main.css";
import axios from "axios";
// import newsapi from "newsapi"; 
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Img } from 'react-image';


const Main = () => {

  const [article, setarticle] = useState([]);


  const get_pic = async () => {
    // axios.get('https://newsapi.org/v2/top-headlines?country=us',
    //   {
    //     headers: {
    //       // 'Access-Control-Allow-Origin': '*',
    //       // 'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE,OPTIONS',
    //       'Authorization': 'cc1aef5aebcd496e984b8d55cbe8a4de'
    //     }
    //   })
    //   .then(res => {
    //     console.log(res.data.articles[1].urlToImage);
    //     res.data.articles.map((element) => {
    //       article.push({ name: `${element.title}`, url: element.urlToImage, author: element.author, rurl: element.url });
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us',
        {
          headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Method': 'GET,PUT,POST,DELETE,OPTIONS',
            'Authorization': 'cc1aef5aebcd496e984b8d55cbe8a4de'
          }
        })
      if (res) {
        console.log(res.data.articles[1].urlToImage);
        res.data.articles.map((element) => {
          article.push({ name: `${element.title}`, url: element.urlToImage, author: element.author, rurl: element.url });
        });
      };
    } catch (err) {
      console.log(err);
    }
  }



  const clean = () => {

    return (
      <div>


        {
          article.map(p => {
            return (
              <a className="col-md-4 col-sm-4" href={p.rurl} id={p.author} style={{ textDecoration: 'none' }}>
                <img src={p.url} alt="can't show image" />
                <p className="test">{p.name}</p>
              </a>
            );
          })
        }

      </div>
    );

  }



  useEffect(() => {
    get_pic();
  }, [])

  useEffect(() => {
    if (typeof (article) != 'undefined' && article.length != 0) {
      clean();
    }
  }, [get_pic()])

  return (

    <div>


      <h1>Main</h1>
      <div className="container1">
        {clean()}
      </div>

    </div>

  );
}

export default Main;