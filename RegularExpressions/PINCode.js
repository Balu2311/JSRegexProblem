let validateWithoutSpace = () =>
{
    console.log("validateWithoutSpace");
    try
    {
        let pincode = 523441//prompt("Enter pincode:");
        //regex pattern for pincode not allowing spaces
        let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5}$');
        //test pincode with pattern
        if(pincodePattern.test(pincode))
            console.log('pincode is valid');
        else
            throw 'Error!!pincode is not valid';
    }
    catch(e)
    {
        //catch the error and print it
        console.error(e);
    }
}
validateWithoutSpace();