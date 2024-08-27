import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Grid, Card, CardContent, Tabs, Tab, Divider, IconButton } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MenuIcon from '@mui/icons-material/Menu';

const data = [
  { name: '23 Dec', Revenue: 2.5, Expenses: 1.2, Net: 1.3 },
  { name: '24 Dec', Revenue: 2.2, Expenses: 1.1, Net: 1.1 },
  { name: '25 Dec', Revenue: 2.0, Expenses: 1.3, Net: 0.7 },
  { name: '26 Dec', Revenue: 2.3, Expenses: 1.0, Net: 1.3 },
  { name: '27 Dec', Revenue: 2.8, Expenses: 1.5, Net: 1.3 },
  { name: '28 Dec', Revenue: 2.7, Expenses: 1.4, Net: 1.3 },
  { name: '29 Dec', Revenue: 3.0, Expenses: 1.6, Net: 1.4 },
];

function Report() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      <AppBar position="static" sx={{ bgcolor: '#fff', color: '#000', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#333' }}>
            Reports
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Tabs for Dashboards */}
      <Box sx={{ p: 2, backgroundColor: '#f9f9f9' }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          <Tab label="General Dashboard" sx={{ fontWeight: 'bold' }} />
          {/* Add more tabs as needed */}
        </Tabs>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Key Performance Indicators and Charts */}
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Key Performance Indicators</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Revenue</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$2,988,900</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Net</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$1,232,700</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Pending Orders</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$1,090,000</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Due</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$390,100</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Overdue</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$569,300</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Inflow</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$150,600</Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Outflow</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$1,000,450</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Revenue" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="Expenses" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="Net" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Bills</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Draft</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$56,233</Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Awaiting Delivery</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$4,232,900</Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Due</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$2,230,000</Typography>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>Overdue</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>$1,922,100</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Due" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="Overdue" stroke="#ffc658" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Report;
