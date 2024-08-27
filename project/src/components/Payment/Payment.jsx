import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Modal, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selectedMainService, setSelectedMainService] = useState('');
  const [selectedInnerService, setSelectedInnerService] = useState('');
  const [amount, setAmount] = useState(0);
  const [shipmentProduct, setShipmentProduct] = useState('');
  const [dimension, setDimension] = useState('');
  const [dimensionError, setDimensionError] = useState(''); // State for dimension error message
  const [shipmentAddress, setShipmentAddress] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [services, setServices] = useState({});

  // Fetch services from backend on component mount
  useEffect(() => {
    axios.get('http://localhost:8080/api/services') // Ensure the URL is correct
      .then(response => {
        const fetchedServices = response.data.reduce((acc, service) => {
          if (!acc[service.category]) {
            acc[service.category] = [];
          }
          acc[service.category].push({ name: service.title, amount: service.amount });
          return acc;
        }, {});
        setServices(fetchedServices);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const handleMainServiceChange = (event) => {
    const selected = event.target.value;
    setSelectedMainService(selected);
    setSelectedInnerService('');
    setAmount(0); // Reset amount when main service changes
  };

  const handleInnerServiceChange = (event) => {
    const selected = event.target.value;
    const innerService = services[selectedMainService].find(service => service.name === selected);
    setSelectedInnerService(innerService.name);
    setAmount(innerService.amount);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length <= 16) {
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-'); // Add dashes every 4 digits
        setCardNumber(formattedValue);
    }
};

  const handleExpirationDateChange = (e) => {
    const value = e.target.value.replace(/\D/g,''); // Remove non-digit characters
    const formattedValue = value.length >= 2 ? `${value.slice(0, 2)}/${value.slice(2, 4)}` : value;
    setExpirationDate(formattedValue);
  };

  const handleDimensionChange = (e) => {
    const value = e.target.value;
    setDimension(value);
    if (!validateDimension(value)) {
      setDimensionError('Dimension must be a positive number with optional decimal and unit (kg or lbs).');
    } else {
      setDimensionError('');
    }
  };

  const addProductToOrder = () => {
    const newProduct = {
      productName: shipmentProduct,
      dimension: dimension,
      quantity: productQuantity,
      mainService: selectedMainService,
      innerService: selectedInnerService,
      amount: amount,
    };

    setProducts([...products, newProduct]);

    // Clear the input fields after adding the product
    setShipmentProduct('');
    setDimension('');
    setProductQuantity(1);
    setSelectedMainService('');
    setSelectedInnerService('');
    setAmount(0);
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateCardDetails() && !dimensionError) {
    try {
      const orderDetails = {
        shipmentAddress,
        products: products.map(product => ({
          productName: product.productName,
          dimension: product.dimension,
          mainService: product.mainService,
          innerService: product.innerService,
          amount: product.amount,
        })),
        name: cardName,
      };
      await axios.post('http://localhost:8080/api/ordermanagement/create', orderDetails);
      setSuccessMessage('Payment Successful');
      setOpenModal(true);
      // Clear the form after submission
      setCardNumber('');
      setCardName('');
      setExpirationDate('');
      setCvv('');
      setShipmentAddress('');
      setProducts([]);
    } catch (error) {
      console.error('Error storing order:', error);
      alert('There was an error processing your payment. Please try again.');
    }
  }
};

  

  const validateCardDetails = () => {
    let isValid = true;
    let errorMessage = '';

    // Card Number Validation
    const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const rawCardNumber = cardNumber.replace(/-/g, ''); // Remove dashes to check the raw length
    if (!cardNumberPattern.test(cardNumber) || rawCardNumber.length !== 16) {
        errorMessage += 'Card Number must be exactly 16 digits.\n';
        isValid = false;
    }

    // Cardholder Name Validation
    if (cardName.trim() === '') {
        errorMessage += 'Cardholder Name cannot be empty.\n';
        isValid = false;
    }

    // Expiration Date Validation
    const expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationPattern.test(expirationDate)) {
        errorMessage += 'Expiration Date must be in MM/YY format.\n';
        isValid = false;
    } else {
        const [month, year] = expirationDate.split('/').map(Number);
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            errorMessage += 'Card has expired.\n';
            isValid = false;
        }
    }

    // CVV Validation
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
        errorMessage += 'CVV must be 3 digits.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
};

  const validateDimension = (value) => {
    // Dimension Validation
    const dimensionPattern = /^\d+(\.\d+)?\s?(kg|lbs|g)?$/i; // Validates numbers with optional decimal and unit (kg/lbs)
    return dimensionPattern.test(value);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    navigate('/Homepage');
  };

 
  const isAddProductDisabled = () => {
    return (
      !shipmentProduct ||
      !dimension ||
      !selectedMainService ||
      !selectedInnerService ||
      productQuantity <= 0
    );
  };

  return (
    <div className="payment-container">
      <div className="hero-section1">
        <h1>Payment Processing</h1>
        <p>Please complete your payment to finalize your order.</p>
      </div>
      <div className="payment-summary">
        <h2 style={{ color: 'black' }}>Order Summary</h2>
        <div className="summary-item">
          <h3>Main Service:</h3>
          <select value={selectedMainService} onChange={handleMainServiceChange}>
            <option value="">Select a main service</option>
            {Object.keys(services).map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        {selectedMainService && (
          <div className="summary-item">
            <h3>Inner Service:</h3>
            <select value={selectedInnerService} onChange={handleInnerServiceChange}>
              <option value="">Select an inner service</option>
              {services[selectedMainService].map(service => (
                <option key={service.name} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
        )}
        <div className="summary-item">
          <h3>Total Amount:</h3>
          <p>₹{amount}</p>
        </div>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Shipment Product"
            variant="outlined"
            value={shipmentProduct}
            onChange={(e) => setShipmentProduct(e.target.value)}
            required
          />
        </div>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Dimension (Weight)"
            variant="outlined"
            value={dimension}
            onChange={handleDimensionChange}
            required
            error={!!dimensionError}
            helperText={dimensionError}
          />
        </div>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Shipment Address"
            variant="outlined"
            value={shipmentAddress}
            onChange={(e) => setShipmentAddress(e.target.value)}
            required
          />
        </div>
        <div className="summary-item">
          <TextField
            fullWidth
            label="Product Quantity"
            variant="outlined"
            type="number"
            value={productQuantity}
            onChange={(e) => setProductQuantity(parseInt(e.target.value, 10))}
            required
          />
        </div>
        <Button
          onClick={addProductToOrder}
          disabled={isAddProductDisabled()}
          variant="contained"
          color="primary"
        >
          Add Product
        </Button>
        <div className="summary-item"style={{color:'black'}}>
          <h3>Products in Order:</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                {product.quantity} x {product.productName} ({product.dimension}) - {product.mainService} - {product.innerService} - ₹{product.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="payment-form">
  <h2 style={{ color: 'black' }}>Enter Card Payment Details</h2>
  <form onSubmit={handleSubmit} className="card-details-form">
    <Grid container spacing={2}>
      {/* Card Number and Cardholder Name on the same row */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Card Number"
              variant="outlined"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Cardholder Name"
              variant="outlined"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Expiration Date and CVV on the next row */}
      <Grid item xs={6} sm={3}>
        <TextField
          fullWidth
          label="Expiration Date"
          variant="outlined"
          placeholder="MM/YY"
          value={expirationDate}
          onChange={handleExpirationDateChange}
          required
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <TextField
          fullWidth
          label="CVV"
          variant="outlined"
          type="password"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
      </Grid>

      {/* Submit button */}
      <Grid item xs={12}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>
</div>
      {/* Success Modal */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box className="modal-box">
          <h2>{successMessage}</h2>
          <Button variant="contained" color="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Payment;