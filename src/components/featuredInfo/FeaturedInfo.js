import { ArrowDownwardOutlined, ArrowUpwardSharp } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>

        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,145</span>
          <span className="featuredMoneyRate">
            -5.44
            <ArrowDownwardOutlined className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>

        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,145</span>
          <span className="featuredMoneyRate">
            -1.44
            <ArrowUpwardSharp className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>

        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$8,145</span>
          <span className="featuredMoneyRate">
            4.44
            <ArrowUpwardSharp className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
