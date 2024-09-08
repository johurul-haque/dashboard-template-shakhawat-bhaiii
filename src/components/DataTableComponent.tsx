import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import ButtonComponent from './ButtonComponent';
import FourBtn from './buttonCollection/FourBtn';

interface DataRow {
  id: number;
  branchName: string;
  branchAddress: string;
  teacherName: string;
  note: string;
}

const data: DataRow[] = [
  { id: 1, branchName: 'One', branchAddress: "Dhaka", teacherName: 'Alisha Henry', note: 'Class one' },
  { id: 2, branchName: 'Two', branchAddress: "Chittagong", teacherName: 'Jordan Mitchell', note: 'Class two' },
  { id: 3, branchName: 'Three', branchAddress: "Kulna", teacherName: 'Jordan Mitchell', note: 'Class three' },
  { id: 4, branchName: 'Four', branchAddress: "Barisal", teacherName: 'Maisie Pollard', note: 'Class four' },
  { id: 5, branchName: 'Five', branchAddress: "Kumilla", teacherName: 'Mia O\'Donnell', note: 'Class five' },
  { id: 6, branchName: 'Graduate', branchAddress: "Rajshahi", teacherName: 'Naomi Doyle', note: 'Class graduate' },
];

const columns: TableColumn<DataRow>[] = [
  { name: '#', selector: row => row.id, sortable: true, width: '60px' },
  { name: 'Branch Name', selector: row => row.branchName, sortable: true },
  { name: 'Branch Address', selector: row => row.branchAddress, sortable: true },
  { name: 'Teacher Name', selector: row => row.teacherName, sortable: true },
  { name: 'Note', selector: row => row.note, sortable: false },
  {
    name: 'Action',
    cell: row => (
      <div>
        <FaEdit className="text-warning me-2" style={{ cursor: 'pointer' }} />
        <FaTrash className="text-danger" style={{ cursor: 'pointer' }} />
      </div>
    ),
    sortable: false,
    width: '120px',
  },
];

const DataTableComponent: React.FC = () => {
  return (
    <div className="">
      {/* Add a class button with icon */}
      <div className="mb-5 d-flex flex-column gap-4">
        <div>
          <FaPlus className="me-2" />
          <a href="#" className="text-primary" style={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Add a Branch
          </a>
        </div>
        <div>
          <FourBtn label="Copy" />
          <FourBtn label="Excel" />
          <FourBtn label="CSV" />
          <FourBtn label="PDF" />
        </div>
      </div>

      <DataTable
        className='border'
        columns={columns}
        data={data}
        pagination
        responsive
        highlightOnHover
        striped
      />
    </div>
  );
};

export default DataTableComponent;
