import React, { useEffect, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const DatePicker: React.VFC = () => {
  const [editDate, setEditDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date | null) => {
    if (date !== null) setEditDate(date);
  };

  return (
    <div style={{ height: 70 }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          label="日付"
          value={editDate}
          onChange={handleDateChange}
          autoOk={true}
          KeyboardButtonProps={{ 'aria-label': 'change date' }}
          style={{ marginLeft: 10 }}
          InputLabelProps={{ shrink: true }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};
