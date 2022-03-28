import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

const TimeSelector = (props) => {

  const [value, setValue] = React.useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div id='time-picker'>

        <TimePicker
          label={props.label}
          value={value}
          ampm={false}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>  
  )
}

export default TimeSelector