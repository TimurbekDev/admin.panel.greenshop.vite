import React from "react"
import { CustomTableProps } from "../types/CustomTablePropsType"
import { Flex, Table } from "antd"

const CustomTable: React.FC<CustomTableProps> = ({ data, columns, scroll }) => {

  return (
    <Flex gap="middle" vertical>
      <Table<any> virtual scroll={scroll} columns={columns} dataSource={data} />
    </Flex>
  )
}

export default CustomTable