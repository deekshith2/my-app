import React, { Component } from 'react';
import { Table } from 'reactstrap';

const Tabls = (props) => {
  return (
      <div className="tabl">
          <h1 >Hostel Information</h1>
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>CMRCET</th>
          <th>CMRIT</th>
          <th>CMRTC</th>
          <th>CMREC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1st YEAR</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2nd YEAR</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3rd YEAR</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">4th YEAR</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default Tabls;