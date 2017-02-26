import React from 'react'
import classNames from 'classnames/bind';
import styles from '../css/styles.css'

var CommonConstants = require('./CommonConstants');
var EditorConstants = require('./EditorConstants');

class Pagination extends React.Component {
  constructor(props)
  {
    super(props);
    // this.state = {
    //   countRows: this.props.countRows,
    //   page: this.props.page,
    //   perPage: this.props.perPage,
    //   pages: Math.ceil(countRows / perPage)
    // }
  }

  // componentDidMount()
  // {
  //   this.state = {
  //     countRows: this.props.countRows,
  //     page: this.props.page,
  //     perPage: this.props.perPage,
  //     pages: Math.ceil(countRows / perPage)
  //   }
  // }

  // handlePagination(from, e)
  // {
  //   console.log(from);
  //   this.setState({
  //     page: from / this.props.perPage
  //   });
  // }

  render()
  {
    // let pageClasses = classNames({
    //   gt_page: true,
    //   selected: this.props.
    // });
    let prevClasses = classNames({
      gt_page: true,
      prev: true
    });
    let nextClasses = classNames({
      gt_page: true,
      next: true
    });
    // console.log(this.props.countRows);

    let countRows = this.props.countRows,
    page = this.props.page,
    perPage = this.props.perPage,
    pages = Math.ceil(countRows / perPage);

    let pagesContent = [];
    for (var i=0;i<pages;++i) {
      let currentPage = i+1;
      let pageClasses = classNames({
        gt_page: true,
        selected: (currentPage === page)?true:false
      });
      pagesContent[i] = <div key={i} data-from={i*perPage} className={pageClasses}>{currentPage}</div>;
    }
    let lastPageFrom = perPage*pages;
    // <div data-from="0" className="gt_page selected">1</div>
    // <div data-from="25" class="gt_page ">2</div>
    // <div data-from="50" class="gt_page ">3</div>
    // <div data-from="75" class="gt_page ">4</div>
    // <div data-from="100" class="gt_page ">5</div>
    return (
      <div className={styles.gt_pagination}>
        <div className={styles.gt_pgn_ttl}>Showing 1 to 25 of 110 entries. </div>
        <div className={styles.gt_pgn_pages}>
          <div className={styles.gt_pagn}>
            <div data-from={lastPageFrom} onClick={this.props.updatePagination} className={prevClasses}>Previous</div>
            {pagesContent}
            <div data-from={perPage} className={nextClasses}>Next</div>
          </div>
        </div>
        <div className={styles.clear}></div>
      </div>
    )
  }
}

export default Pagination
