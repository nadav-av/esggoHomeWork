import React, { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./remiderForm.css";

const ReminderForm = ({ addReminder }) => {
  const [value, setValue] = useState(new Date());
  const [hour, setHour] = useState(0);

  const handleDatePick = (newValue) => {
    setValue(newValue);
  };

  const handleTimePick = (newValue) => {
    setHour(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="reminder-form-container">
        <div className="date-picker">
          <MobileDatePicker
            label="Date mobile"
            inputFormat="dd/MM/yyyy"
            value={value}
            onChange={handleDatePick}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className="time-picker">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hour}
              label="hour"
              onChange={handleTimePick}
            >
              <MenuItem value={0}>00:00</MenuItem>
              <MenuItem value={1}>01:00</MenuItem>
              <MenuItem value={2}>02:00</MenuItem>
              <MenuItem value={3}>03:00</MenuItem>
              <MenuItem value={4}>04:00</MenuItem>
              <MenuItem value={5}>05:00</MenuItem>
              <MenuItem value={6}>06:00</MenuItem>
              <MenuItem value={7}>07:00</MenuItem>
              <MenuItem value={8}>08:00</MenuItem>
              <MenuItem value={9}>09:00</MenuItem>
              <MenuItem value={10}>10:00</MenuItem>
              <MenuItem value={11}>11:00</MenuItem>
              <MenuItem value={12}>12:00</MenuItem>
              <MenuItem value={13}>13:00</MenuItem>
              <MenuItem value={14}>14:00</MenuItem>
              <MenuItem value={15}>15:00</MenuItem>
              <MenuItem value={16}>16:00</MenuItem>
              <MenuItem value={17}>17:00</MenuItem>
              <MenuItem value={18}>18:00</MenuItem>
              <MenuItem value={19}>19:00</MenuItem>
              <MenuItem value={20}>20:00</MenuItem>
              <MenuItem value={21}>21:00</MenuItem>
              <MenuItem value={22}>22:00</MenuItem>
              <MenuItem value={23}>23:00</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="reminder-submit-btn">
          <button
            className="reminder-submit-btn"
            onClick={() => addReminder(value, hour)}
          >
            +
          </button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ReminderForm;
