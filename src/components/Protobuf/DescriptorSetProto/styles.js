const styles = theme => ({
  descriptorRoot: {},
  descriptorFieldRowContainer: {},
  descriptorInputField: {},
  descriptorSelect: {},
  inputBase: {
    height: 25,
    boxSizing: 'border-box',
    margin: [10, 0, 13, 0],
    width: 250,
    border: `1px solid ${theme.palette.greyscale(0.3)}`,
    borderRadius: '3px',
    padding: [3, 2],
    fontSize: 12,
    '&::placeholder': {
      fontSize: 10
    }
  },
  buttonBase: {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.greyscale(0.3)}`,
    color: theme.palette.greyscale(0.3),
    fontWeight: 'bold'
  },
  selectBase: {
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.greyscale(0.3)}`,
    borderRadius: '3px',
    padding: [3, 2],
    width: '48%'
  },
  addRowButton: {
    border: 0,
    margin: [0, 0, 5, 0],
    '&:hover': {
      cursor: 'pointer'
    }
  },
  removeRowButton: {
    marginLeft: 7,
    border: 0,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  selectOptions: {
    width: 250,
    display: 'flex',
    justifyContent: 'space-between'
  },
  // tags input
  tagsInputRoot: {
    width: 250,
    marginBottom: 13,
    boxSizing: 'border-box'
  }
})

export default styles