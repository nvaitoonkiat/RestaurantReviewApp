import React from "react";
import { List, Avatar, Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
    />
    {text}
  </span>
);

const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.restname}
          actions={[
            <IconText type="star-o" text="156" />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
          extra={
            <img width={272} alt="logo" src={item.img} class="articleimage" />
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar
                size={64}
                src="https://i.ibb.co/DCKKtRg/logo-transparent.png"
              />
            }
            title={<a href={`/${item.restid}`}> {item.restname} </a>}
            description={item.countrycode}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default Articles;
