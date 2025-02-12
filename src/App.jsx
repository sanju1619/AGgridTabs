import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const App = () => {
  const [activeTab, setActiveTab] = useState('labor');

  const columnDefsLabor = [
    { headerName: 'Labor Category', field: 'laborCategory', editable: true },
    { headerName: 'Carrier Supplied Rates', field: 'carrierSuppliedRates',cellStyle:{color:"blue"} },
    {
      headerName: 'Collision Information Rate (Calculated as Average)',
      field: 'collisionInfoRate',
    },
  ];

  const rowDataLabor = [
    {
      laborCategory: 'Refinish',
      carrierSuppliedRates: '₹59.00',
      collisionInfoRate: '₹59.00',
    },
    {
      laborCategory: 'Body',
      carrierSuppliedRates: '₹59.00',
      collisionInfoRate: '₹59.00',
    },
    {
      laborCategory: 'Paint Materials',
      carrierSuppliedRates: '₹42.00',
      collisionInfoRate: '₹42.00',
    },
    {
      laborCategory: 'Frame',
      carrierSuppliedRates: '₹93.00',
      collisionInfoRate: '₹93.00',
    },
    {
      laborCategory: 'Structural',
      carrierSuppliedRates: '₹76.00',
      collisionInfoRate: '₹76.00',
    },
    {
      laborCategory: 'Mechanical',
      carrierSuppliedRates: '₹111.00',
      collisionInfoRate: '₹111.00',
    },
  ];

  const columnDefsTax = [
    { headerName: 'Tax Name', field: 'taxName' },
    { headerName: 'Rate', field: 'rate' },
  ];

  const rowDataTax = [
    { taxName: 'Sales Tax', rate: '8.25%' },
    { taxName: 'Excise Tax', rate: '2.00%' },
    { taxName: 'Property Tax', rate: '1.5%' },
  ];

  const columnDefsTaxApplicability = [
    { headerName: 'Item', field: 'item' },
    { headerName: 'Applicable', field: 'applicable' },
  ];

  const rowDataTaxApplicability = [
    { item: 'Labor', applicable: 'Yes' },
    { item: 'Parts', applicable: 'No' },
    { item: 'Materials', applicable: 'Yes' },
  ];

  const getRowData = () => {
    switch (activeTab) {
      case 'labor':
        return rowDataLabor;
      case 'tax':
        return rowDataTax;
      case 'taxApplicability':
        return rowDataTaxApplicability;
      default:
        return [];
    }
  };

  const getColumnDefs = () => {
    switch (activeTab) {
      case 'labor':
        return columnDefsLabor;
      case 'tax':
        return columnDefsTax;
      case 'taxApplicability':
        return columnDefsTaxApplicability;
      default:
        return [];
    }
  };

  return (
    <div>
      <h1>Collision Information Rate Calculation</h1>
      <p>
        Use the tabs below to view rates for the selected inspection location
      </p>
      <div className="tabs">
        <button
          className={activeTab === 'labor' ? 'active' : ''}
          onClick={() => setActiveTab('labor')}
        >
          Labor Rates
        </button>
        <button
          className={activeTab === 'tax' ? 'active' : ''}
          onClick={() => setActiveTab('tax')}
        >
          Tax
        </button>
        <button
          className={activeTab === 'taxApplicability' ? 'active' : ''}
          onClick={() => setActiveTab('taxApplicability')}
        >
          Tax Applicability
        </button>
      </div>
      <h2>Inspection Location Labor Report</h2> {/* Added heading */}
      <div className="ag-theme-alpine" style={{ height: 400, width: 700 }}>
        <AgGridReact
          // modules={[AllCommunityModules]}
          rowData={getRowData()}
          columnDefs={getColumnDefs()}
          domLayout="autoHeight"
        />
      </div>
      <div className="coordinates-address">
        <p>Coordinates: 35.1349518, -106.624249</p>
        <p>
          Address: 600 MONTANO ROAD NE
          <br />
          ALBUQUERQUE NM 87107-4952
        </p>
      </div>
    </div>
  );
};

export default App;
