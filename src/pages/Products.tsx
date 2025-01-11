import { Button, Input, Select, TableColumnsType } from 'antd';
import getCategory from '../services/category/getCategory';
import { ICategory } from '../types/CategoryType';
import getProducts from '../services/product/getProducts';
import { useState } from 'react';
import { IProduct } from '../types/ProductType';
import CustomTable from '../components/CustomTable';



const Products = () => {

  const [category, setCategory] = useState<string | null>(null);

  const categories = getCategory();

  function handleCategory(_: string, obj: any) {
    setCategory(obj.label);
  }

  const products = getProducts({
    page: 1,
    limit: 1000,
    category
  });

  const columns: TableColumnsType<IProduct> = [
    { key: 1, title: 'Id', dataIndex: 'key', align: 'center' },
    { key: 2, title: 'Name', dataIndex: 'product_name', align: 'center' },
    { key: 3, title: 'Cost', dataIndex: 'cost', align: 'center' },
    {
      key: 4,
      title: 'Delete',
      dataIndex: 'product_id',
      render: () => {
        return <Button className="bg-red-700 text-white">Delete</Button>
      },
      align: 'center'
    },
  ]

  return (
    <div className='flex flex-col mt-2 gap-2'>
      <div className="flex w-full gap-3 justify-between has-[10%] bg-inherit px-4">
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="label"
          onChange={handleCategory}
          options={categories.map((category: ICategory) => ({
            label: category.category_name,
            value: category.category_name
          }))}
        />
        <Input></Input>
        <Button color="primary" >Add Product</Button>
      </div>
      <CustomTable data={products} scroll={{ x: 4, y: 520 }} columns={columns} />
    </div>
  )
}

export default Products