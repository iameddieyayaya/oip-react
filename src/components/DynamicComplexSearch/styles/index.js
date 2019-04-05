// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const styles = theme => ({
  // containers
  root: {
    display: 'inline-flex',
    flexDirection: 'column'
  },
  formRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
    width: '530px',
    flexWrap: 'wrap'
  },
  queryContainer: {
    display: 'flex',
    maxWidth: 500,
    flexWrap: 'wrap'
  },
  dateTimePicker: {
    display: 'flex'
  },
  datePicker: {
    display: 'flex'
  },
  timePicker: {
    display: 'flex'
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  // selects and inputs
  selectBase: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.main,
    border: 'none',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    margin: [0, 5, 10],
    fontSize: 14,
    padding: 3,
    cursor: 'default',
    '&:hover': {
      // backgroundColor: theme.palette.info.bright[3]
      cursor: 'pointer'
    }
  },
  inputBase: {
    extend: 'selectBase'
  },
  selectField: {
    extend: 'selectBase'
  },
  selectOption: {
    extend: 'selectBase'
  },
  selectOp: {
    extend: 'selectBase'
  },
  // inputs
  inputQuery: {
    extend: 'selectBase',
    position: 'relative'
  },
  inputDatalist: {
    extend: 'inputBase'
  },
  // buttons
  buttonBase: {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.main,
    border: 'none'
  },
  fnButtons: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      color: 'white'
    },
    height: 30,
    width: 80
  },
  addButton: {
    extend: ['buttonBase', 'fnButtons']
  },
  submitButton: {
    extend: ['buttonBase', 'fnButtons'],
    marginLeft: '10px'
  },
  removeButton: {
    extend: 'buttonBase',
    '&:hover': {
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  },
  // spans
  andSpan: {
    margin: 10,
    extend: 'flex',
    alignItems: 'center'
  }
})

export default styles