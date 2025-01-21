import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate } from "react-router";
import cryptoStore from '../stores/cryptoStore';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import { DataGrid, GridColDef, GridEventListener, GridRowsProp } from '@mui/x-data-grid';

const CryptoList: React.FC = observer(() => {
  const navigate = useNavigate();
  const { rates, loading, error, loadRates } = cryptoStore;

  useEffect(() => {
    loadRates();
  }, [loadRates]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  const rows: GridRowsProp = Object.keys(rates).map((symbol) => ({ id: symbol }))

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Currency', flex: 1 },
  ];

  const handleCellClick: GridEventListener<"cellClick"> = (cell) => navigate(`/${cell.value}`);

  return (
    <Container sx={{ py: '20px' }}>
      <Link to={'/dev-notes'}>Developer notes</Link>
      <Typography variant="h4" gutterBottom>
        Cryptocurrency Rates
      </Typography>
      <DataGrid columns={columns} rows={rows} onCellClick={handleCellClick} sx={{ cursor: 'pointer' }} />
    </Container>
  );
});

export default CryptoList;