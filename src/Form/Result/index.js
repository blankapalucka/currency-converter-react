export const Result = ({ result }) => (

<p className="result">
    {result !== undefined && (
        <>
        {result.sourceAmount.toFixed(2)}
        </>
    )}
</p>    
);

