import { Button, Input, Modal, TableColumnsType } from "antd";
import getCategory from "../services/category/getCategory"
import { ICategory } from "../types/CategoryType";
import CustomTable from "../components/CustomTable";
import { useState } from "react";
import addcategory from "../services/category/addcategory";
import deleteCategory from "../services/category/deleteCategory";

const Categories = () => {

  const [modal, setModal] = useState<boolean>(false);
  const [newcategory, setNewCategory] = useState<string | null>(null);
  const [updateModal, setUpdateModal] = useState<boolean>(false);

  const categories = getCategory();
  const addMutation = addcategory();
  const deleteMutation = deleteCategory()

  const addCategoryFn = () => {
    if (newcategory) addMutation.mutate(newcategory);
  }

  const columns: TableColumnsType<ICategory> = [
    { key: 1, title: 'Id', dataIndex: 'key', align: 'center' },
    { key: 2, title: 'Name', dataIndex: 'category_name', align: 'center' },
    {
      key: 3,
      title: 'Update',
      dataIndex: 'category_id',
      render: () => {
        return <Button onClick={()=>setUpdateModal(true)} className="bg-yellow-500">Update</Button>
      },
      align: 'center'
    },
    {
      key: 4,
      title: 'Delete',
      dataIndex: 'category_id',
      render: (record: string) => {
        return <Button onClick={() => deleteMutation.mutate(record as string)} className="bg-red-500">Delete</Button>
      },
      align: 'center'
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="flex bg-slate-200 items-center px-4 py-1 justify-between">
        <p className="text-xl font-semibold">Categories count : <span className="">{categories.length}</span></p>
        <Button onClick={() => setModal(true)}>Add Category</Button>
      </div>
      <CustomTable data={categories} scroll={{ x: 4, y: 500 }} columns={columns} />
      <Modal
        open={modal}
        onCancel={() => {
          setModal(false);
        }}
        onOk={() => {
          addCategoryFn();
          setModal(false);
          setNewCategory(null);
        }}
      >
        <div className="flex flex-col gap-2 text-blue-600">
          <p className="text-xl">Add Category</p>
          <Input value={newcategory as string} onChange={(e: any) => setNewCategory(e.target.value)} placeholder="Enter category name" className="flex px-3 h-[40px] justify-center" />
        </div>
      </Modal>
      {/* Update Modal */}
      <Modal
        open={updateModal}
        onCancel={() => {
          setModal(false);
        }}
        onOk={() => {
          addCategoryFn();
          setModal(false);
          setNewCategory(null);
        }}
      >
        <div className="flex flex-col gap-2 text-blue-600">
          <p className="text-xl">Update Category</p>
          <Input value={newcategory as string} onChange={(e: any) => setNewCategory(e.target.value)} placeholder="Enter category name" className="flex px-3 h-[40px] justify-center" />
        </div>
      </Modal>
    </div>
  )
}

export default Categories