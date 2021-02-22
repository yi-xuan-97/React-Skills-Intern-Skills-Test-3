import "../styles/portfolio.css";
import Gallery from "react-photo-gallery";
import { React, useEffect, useState } from "react";
import axios from "axios";

const Portfolio = () => {
  const [article, setarticle] = useState([]);


  const get_pic = async () => {

    try {
      const res = await axios.get('https://newsapi.org/v2/everything?q=bitcoin',
        {
          headers: {
            'Authorization': 'cc1aef5aebcd496e984b8d55cbe8a4de'
          }
        })
      if (res) {
        console.log(res.data.articles[1].urlToImage);
        res.data.articles.map((element) => {
          article.push({ src: element.urlToImage, width:3, height:3 });
        });
      };
    } catch (err) {
      console.log(err);
    }
  }



  const clean = () => {

    return (
      // <div>


      //   {
      //     article.map(p => {
      //       return (
      //         <div className="row">
      //           <div className="col-md-2 col-sm-2">
      //             <a href={p.rurl} id={p.author} style={{ textDecoration: 'none' }}>
      //               <img src={p.url} alt="can't show image" />
      //             </a>
      //           </div>
      //         </div>
      //       );
      //     })
      //   }

      // </div>

      <Gallery photos={article} />

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


        <h1>Porfolio Page</h1>
        <div className="container1">
          {clean()}
        </div>

      </div>


  );
}

export default Portfolio;