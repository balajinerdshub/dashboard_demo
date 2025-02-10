import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  // State for filters
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [atmId, setAtmId] = useState("");

  // Dummy ATM IDs
  const atmOptions = ["ATM_001", "ATM_002", "ATM_003", "ATM_004"];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Filter Cards Section */}
        <Grid container spacing={2} mb={3}>
          {/* Start Date Card */}
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  Start Date
                </Typography>
                <TextField
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* End Date Card */}
          <Grid item xs={12} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  End Date
                </Typography>
                <TextField
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Select ATM ID Card */}
          <Grid item xs={12} md={4} lg={2}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary">
                  Select ATM ID
                </Typography>
                <TextField
                  select
                  fullWidth
                  size="small"
                  value={atmId}
                  onChange={(e) => setAtmId(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                >
                  {atmOptions.map((id) => (
                    <MenuItem key={id} value={id}>
                      {id}
                    </MenuItem>
                  ))}
                </TextField>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Statistics Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total ATM Withdrawals"
                count="50,00,000"
                percentage={{ color: "success", amount: "+55%", label: "than last week" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Highest Cash Withdrawal Day"
                count="Monday"
                percentage={{ color: "success", amount: "+3%", label: "than last month" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="📈"
                title="Average Daily Demand"
                count="2,300"
                percentage={{ color: "success", amount: "+1%", label: "than yesterday" }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="ⓘ"
                title="Refill Alerts"
                count="10"
                percentage={{ color: "success", amount: "", label: "Just updated" }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/* Charts Section */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Transaction Patterns by Day"
                  date="sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Model_1"
                  description="Performance Score: 30%"
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Model_2"
                  description="Performance Score: 12%"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
