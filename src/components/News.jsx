import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country, category, apiKey, pageSize }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitalizeFirstLetter(category)}- DailyDoseOfNews`;

  const updateNews = async () => {
    var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${
      page + 1
    }&pageSize=${pageSize}`;

    setLoading(true);
    let data = await fetch(url);
    let parseData = await data.json();

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
    console.log(articles.length);
  };

  return (
    <>
      <h2
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "80px" }}
      >
        DailyDoseOfNews- Top Headlines from {capitalizeFirstLetter(category)}
      </h2>
      {/*    {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <NewsItems
                    title={elements ? elements.title.slice(0, 100) : ""}
                    description={
                      elements.description ? elements.description : ""
                    }
                    newsUrl={elements.url}
                    imageUrl={
                      elements.urlToImage
                        ? elements.urlToImage
                        : "https://th.bing.com/th/id/OIP.AC9frN1qFnn-I2JCycN8fwHaEK?pid=ImgDet&rs=1"
                    }
                    author={elements.author}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
