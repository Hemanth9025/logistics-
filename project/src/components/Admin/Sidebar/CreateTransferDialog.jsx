import React from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import './CreateTransferDialog.css';

const CreateTransferDialog = ({ open, onClose }) => {
  const [transferType, setTransferType] = React.useState('');
  const [inventoryStatus, setInventoryStatus] = React.useState('Available');
  const [department, setDepartment] = React.useState('');
  const [fromLocation, setFromLocation] = React.useState('');
  const [finisher, setFinisher] = React.useState('');
  const [toLocation, setToLocation] = React.useState('');

  const handleTransferTypeChange = (event) => {
    setTransferType(event.target.value);
  };

  const handleInventoryStatusChange = (event) => {
    setInventoryStatus(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleFromLocationChange = (event) => {
    setFromLocation(event.target.value);
  };

  const handleFinisherChange = (event) => {
    setFinisher(event.target.value);
  };

  const handleToLocationChange = (event) => {
    setToLocation(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Transfer</DialogTitle>
      <DialogContent className="dialog-content">
        <FormControl fullWidth margin="normal" className="form-control">
          <InputLabel>Transfer Type</InputLabel>
          <Select value={transferType} onChange={handleTransferTypeChange} className="select-input">
            <MenuItem value="Administrative">Administrative</MenuItem>
            <MenuItem value="Book Transfer">Book Transfer</MenuItem>
            <MenuItem value="Confirmation">Confirmation</MenuItem>
            <MenuItem value="Intercompany">Intercompany</MenuItem>
            <MenuItem value="Manual Requisition">Manual Requisition</MenuItem>
            <MenuItem value="Reallocation Transfer">Reallocation Transfer</MenuItem>
            <MenuItem value="Return to Vendor">Return to Vendor</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" className="form-control">
          <InputLabel>Inventory Status</InputLabel>
          <Select value={inventoryStatus} onChange={handleInventoryStatusChange} className="select-input">
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Unavailable">Unavailable</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" className="form-control">
          <InputLabel>Department</InputLabel>
          <Select value={department} onChange={handleDepartmentChange} className="select-input">
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Dept1">Dept1</MenuItem>
            <MenuItem value="Dept2">Dept2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" className="form-control">
          <InputLabel>From Location</InputLabel>
          <Select value={fromLocation} onChange={handleFromLocationChange} className="select-input">
            <MenuItem value="Store">Store</MenuItem>
            <MenuItem value="Warehouse">Warehouse</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" className="form-control">
          <InputLabel>Finisher</InputLabel>
          <Select value={finisher} onChange={handleFinisherChange} className="select-input">
            <MenuItem value="Internal">Internal</MenuItem>
            <MenuItem value="External">External</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal" className="form-control">
          <InputLabel>To Location</InputLabel>
          <Select value={toLocation} onChange={handleToLocationChange} className="select-input">
            <MenuItem value="Store">Store</MenuItem>
            <MenuItem value="Warehouse">Warehouse</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions className="dialog-actions">
        <Button onClick={onClose} className="cancel-button">Cancel</Button>
        <Button onClick={handleSubmit} color="primary" className="ok-button">OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTransferDialog;
