
function Input ({ number, base, onChangeValue}) {



    return (
        <>
            <label >Base : {base}
                <input type={'text'} name={base} value={number} onChange={onChangeValue}/>
            </label>
        </>
    )
}

export default Input