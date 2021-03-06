import React  from 'react';
const SearchBox = ({value,onChange}) => {
    return ( 
         <form className="form-inline">
        <input
        type="text"
        name="query"
        className="form-control mr-sm-2"
        placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
        style={{width:"1000px",marginBottom:"4px",boxShadow: "10px 5px 5px grey"}}
        value={value}
        onChange={e=>onChange(e.currentTarget.value)}
        /><button type="submit" className="btn btn-primary">Search</button>
        </form>
     );
}
 
export default SearchBox;