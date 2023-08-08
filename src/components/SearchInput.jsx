import Button from "./Button"

const SearchInput = ({placeholder}) => {
  return (
    <form style={formStyle}>
        <input
            // style={{width: '100%'}} 
            style={inputStyle}
            type="search" 
            placeholder={placeholder}
        />
        <Button
            // bgcolor='red'
            text='SEARCH'
         />
    </form>    
  )
}

const formStyle={
    // backgroundColor: 'red',
    width: '100%',
    display: 'flex',
    gap: '10px',
    border: 'none'
}

const inputStyle={
    border: '1px solid #a5a5a8',
    width: '100%',
    padding: '10px 4px 10px 40px',
    background: `transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center`,
    borderRadius: '5px',
    fontSize: '16px',
}

export default SearchInput