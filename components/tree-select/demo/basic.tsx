import type { SyntheticEvent } from 'react';
import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const treeData = [
  {
    value: 'brand+brios+ruand',
    title: '第三方支付国家',
    children: [
      {
        value: 'brand+brios',
        title: '巴西双系统',
        children: [
          {
            value: 'brand',
            title: '巴西AND',
          },
          {
            value: 'brios',
            title: '巴西iOS',
          },
        ],
      },
      {
        value: 'ruand',
        title: '俄罗斯'
       
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onPopupScroll = (e: SyntheticEvent) => {
    console.log('onPopupScroll', e);
  };

  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      onPopupScroll={onPopupScroll}
    />
  );
};

export default App;
