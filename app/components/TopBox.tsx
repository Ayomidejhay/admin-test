import React from "react";
import { topDealUsers } from "../data";
import Image from "next/image";

function TopBox() {
  return (
    <div className="topBox">
      <h1 className="!mb-5">Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div
            className="flex items-center justify-between !mb-7.5"
            key={user.id}
          >
            <div className="flex gap-5">
              <Image
                src={user.img}
                alt={user.username}
                width={20}
                height={20}
                className="rounded-[100%] object-cover w-[20px] h-[20px]"
              />

              <div className="flex flex-col font-medium">
                <span className="!text-[12px] font-medium">{user.username}</span>
                <span className="!text-[10px]">{user.email}</span>
              </div>
            </div>
            <span className="font-medium">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
