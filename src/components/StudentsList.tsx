import React from 'react'
import UpDelBlock from './UpDelBlock'

export default function StudentsList() {
  return (
    <div>
      <table style={{borderCollapse:'collapse',width:'100%'}}>
        <tr>
          <th>Mã sinh viên</th>
          <th>Tên sinh viên</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
        <tr>
          <td>SV001</td>
          <td>Nguyễn Văn A</td>
          <td>21/04/2023</td>
          <td>nva@gmail.com</td>
          <td>Đang hoạt động</td>
          <td><UpDelBlock></UpDelBlock></td>
        </tr>
      </table>
        
    </div>
  )
}
