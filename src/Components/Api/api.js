import React, { Component } from "react";

import loadingImage from "../../Assets/loading3.gif";

import Aside from "./aside/aside.component.jsx";
import Button from "../Buttons/buttons";

import { countryCodes } from "../countries";

export const API_KEY = "5b039b929ba344409712522284841478";

class ApiData extends Component {
  state = {
    allNewsData: [],
    dataLoaded: false,
    value: "",
    country: "NG",
    category:'business',
    searchValue: ""
  };

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${API_KEY}`;
    let url  =`http://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${API_KEY}`
    let req = new Request(url);
    const res = await fetch(req);
    const data = await res.json();

    this.setState({
      dataLoaded: true,
      allNewsData: data
    }, ()=> console.log(this.state.allNewsData));
  }

  //this async/await lifecycle triggers when a value is entered and searched
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country || prevState.category !== this.state.category) {
      this.setState({ dataLoaded: false });
      const response = await fetch(
        `http://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${API_KEY}`
        // `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${API_KEY}`
      );
      //An update to the state with the newly fetched API data
      const data = await response.json();
      this.setState({
        dataLoaded: true,
        allNewsData: data
      });
    }
  }

  //this function handles the new value entered to the 'search' input tag
  handleChange = ({ target: { value, name } }) => {
    this.setState(
      {
        [name]: value
      },
      () => this.updateSearch()
    );
    console.log(`${[name]}:${value}`);
  };

  //Supper algorithm, thanks to Chibuike and George, we got this algorithm from Chibuike written by George
  // this function has access to country/country codes data from the country component. It looks for the current input value and finds a match in the countries component object. It then gets the corresponding initials of the matched country and returns it */
  matchQuery = () => {
    const objKey = Object.keys(countryCodes);
    const objData = objKey.filter(
      item => item.toLowerCase() === this.state.value.toLowerCase()
    );

    let countryCode = "";

    for (let key in countryCodes) {
      if (objData[0] === key) {
        countryCode = countryCodes[key].split(" ")[0];
      }
    }
    console.log(countryCode);
    return countryCode;
  };

  //this function fires when the 'search' button is clicked. it updates the country state with the returned value from the matchquery function. this updated state serves as a query for the searched country
  updateSearch = () => {
    if (!this.state.value) return;
    this.setState({
      country: this.matchQuery(),
    });
    console.log(this.state.country);
  };

  searchedValue = ({ target: { value } }) => {
    this.setState({ searchValue: value }, console.log(this.state.searchValue));
  };

  render() {
    let {
      searchValue,
      dataLoaded,
      allNewsData: { articles }
    } = this.state;

    

    if (!dataLoaded) {
      return (
        <div>
          <Button />
          <div
            style={{
              height: "400px",
              width: "100%",
              display: "flex",
              flexWrap:'wrap',
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fafaf5"
            }}
          >
            <div
              style={{ textAlign: "center", color: "red", flexBasis: "70%" }}
            >
              <img
                src={loadingImage}
                alt="..."
                style={{ height: "150px", width: "200px" }}
              />
              <div>Loading...</div>
            </div>
            <div style={{flexBasis:'30%'}}>
          <Aside />
          </div>
          </div>
        </div>
      );
    }

    let filteredNews = articles.filter(article => 
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(articles);

    return (
      <section>
        {" "}
        <Button
        style={{flexWrap: 'wrap', height: 'max-content'}}
          value={this.state.value}
          handleChange={this.handleChange}
          searchValue={this.searchedValue}

          // searchCategory={this.searchCategory}
          // handleCate={this.handleCate}
          newValue={this.state.category}
        />
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexWrap:'wrap',
            marginTop: "10px"
          }}
        >
          <div
            style={{
              height: "90vh",
              overflow: "scroll",
              flexBasis: "70%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",

            }}
          >
            {/**mapping through the already fetched data in the state to display desired information */}
            {filteredNews.map(news => {
              const { author, title, url, urlToImage, publishedAt } = news;
              return (
                <div
                  key={Math.random()}
                  style={{
                    flexBasis:'60%',
                    // width: "max-content",
                    height: "max-content",
                    textAlign:'center',
                    margin: "10px",
                  }}
                >
                  <div style={{ width: "100%", boxShadow: "5px 5px 2px gray" }}>
                    <a href={url} style={{ textDecoration: "none" }}>
                      <h3>{title}</h3>
                      <div style={{ width: "100%", textAlign: "center" }}>
                        {" "}
                        <img
                          src={urlToImage}
                          alt=""
                          style={{ height: "200px", width: "250px" }}
                        />{" "}
                      </div>
                      <h6>{author}</h6>
                      <h6
                        style={{
                          marginTop: "5px",
                          float: "left",
                          color: "darkblue"
                        }}
                      >
                        {publishedAt}
                      </h6>
                      <p
                        style={{
                          marginTop: "5px",
                          textDecoration: "none",
                          float: "right",
                          color: "#bf3152"
                        }}
                      >
                        >> Read more...
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{flexBasis:'30%'}}>
          <Aside />
          </div>
        </main>
      </section>
    );
  }
}
export default ApiData;
