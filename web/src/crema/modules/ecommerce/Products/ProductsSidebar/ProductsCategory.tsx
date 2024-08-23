import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { StyledProductSidebarTree } from './index.styled';

const ProductsCategory = () => {
  return (
    <StyledProductSidebarTree
      showLine
      selectable={true}
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={['1']}
      treeData={[
        {
          title: 'Watches',
          key: '1',
          children: [
            {
              title: "Men's Watches",
              key: '1.1',
            },
            {
              title: "Women's Watches",
              key: '1.2',
            },
            {
              title: "Kid's Watches",
              key: '1.3',
            },
          ],
        },
        {
          title: 'Clothes',
          key: '2',
          children: [
            {
              title: "Men's Clothes",
              key: '2.1',
            },
            {
              title: "Women's Clothes",
              key: '2.2',
            },
            {
              title: "Kid's Clothes",
              key: '2.3',
            },
          ],
        },
      ]}
    />
  );
};

export default ProductsCategory;
