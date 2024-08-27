import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import './TransferPage.css';

const TransferPage = () => {
  const [inventoryStatus, setInventoryStatus] = useState('Available');
  const [context, setContext] = useState('');
  const [externalReferenceCode, setExternalReferenceCode] = useState('');
  const [fromStore, setFromStore] = useState('');
  const [toStore, setToStore] = useState('');
  const [freightType, setFreightType] = useState('');
  const [carrier, setCarrier] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [expectedWHDate, setExpectedWHDate] = useState('');
  const [notAfterDate, setNotAfterDate] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic
    console.log("Transfer details submitted");
  };

  return (
    <div className="transfer-page">
      <h1>Transfer</h1>
      <div className="section">
        <h3>Transfer Details</h3>
        <FormControl fullWidth margin="normal">
          <InputLabel>Inventory Status</InputLabel>
          <Select value={inventoryStatus} onChange={(e) => setInventoryStatus(e.target.value)}>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Unavailable">Unavailable</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField label="Context" value={context} onChange={(e) => setContext(e.target.value)} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField label="External Reference Code" value={externalReferenceCode} onChange={(e) => setExternalReferenceCode(e.target.value)} />
        </FormControl>
        <TextField
          label="Created Date"
          type="date"
          fullWidth
          disabled
          InputLabelProps={{ shrink: true }}
          defaultValue="2016-07-18" // Replace with dynamic date as needed
        />
        <TextField
          label="Delivery Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />
        <TextField
          label="Expected WH Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={expectedWHDate}
          onChange={(e) => setExpectedWHDate(e.target.value)}
        />
        <TextField
          label="Not After Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={notAfterDate}
          onChange={(e) => setNotAfterDate(e.target.value)}
        />
      </div>
      <div className="section">
        <h3>Locations</h3>
        <FormControl fullWidth margin="normal">
          <TextField label="From Store" value={fromStore} onChange={(e) => setFromStore(e.target.value)} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField label="To Store" value={toStore} onChange={(e) => setToStore(e.target.value)} />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Freight Type</InputLabel>
          <Select value={freightType} onChange={(e) => setFreightType(e.target.value)}>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="Express">Express</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField label="Carrier" value={carrier} onChange={(e) => setCarrier(e.target.value)} />
        </FormControl>
      </div>
      <div className="actions">
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        <Button variant="outlined" color="secondary">Cancel</Button>
      </div>
    </div>
  );
};

export default TransferPage;
