import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cryptoStore from '../stores/cryptoStore';
import { Container, Typography, Alert, List, ListItem } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

const CryptoDetails: React.FC = observer(() => {
  const { symbol } = useParams<{ symbol: string }>();
  const crypto = cryptoStore.rates[symbol!]

  if (!crypto) return <Alert severity="error">Cryptocurrency not found!</Alert>;

  const rows: GridRowsProp = Object.entries(crypto).map(([rateSymbol, rates]) => ({ 
    id: rateSymbol,
    ...rates
  }))

  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Currency', flex: 1 },
    { field: 'rate', headerName: 'Rate (USD)', flex: 1 },
    { field: 'ask', headerName: 'Ask (USD)', flex: 1 },
    { field: 'bid', headerName: 'Bid (USD)', flex: 1 },
    { field: 'diff24h', headerName: '24h Change (USD)', flex: 1 },
  ];

  return (
    <Container sx={{ py: '20px' }}>
      <Link to={'/'}>Back</Link>
      <Typography variant="h4" gutterBottom>
        {symbol}
      </Typography>
      <List>
        <DataGrid columns={columns} rows={rows} />
        
        {Object.entries(crypto).map(([rateSymbol, rates]) => (
          <ListItem key={rateSymbol}>
            <Typography>Rate: ${rates.rate.toFixed(2)}</Typography>
            <Typography>Ask: ${rates.ask.toFixed(2)}</Typography>
            <Typography>Bid: ${rates.bid.toFixed(2)}</Typography>
            <Typography>24h Change: {rates.diff24h.toFixed(2)}%</Typography>
          </ListItem>
        ))}
      </List>
    </Container>
  );
});

export default CryptoDetails;