import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Notifier from './Notifier';
import {
    enqueueSnackbar as enqueueSnackbarAction,
    closeSnackbar as closeSnackbarAction,
} from './redux/actions';

function App() {
    const dispatch = useDispatch();
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args));
    const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args));

    const handleClick = () => {
        enqueueSnackbar({
            message: 'Failed fetching data.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'warning',
                action: key => (
                    <Button onClick={() => closeSnackbar(key)}>dismiss</Button>
                ),
            },
        });
    };

  return (
    <div className="App">
      <header className="App-header">
          <Notifier />
          <Button
              variant="contained"
              color="secondary"
              onClick={handleClick}
          >
              Display snackbar
          </Button>
      </header>
    </div>
  );
}

export default App;
