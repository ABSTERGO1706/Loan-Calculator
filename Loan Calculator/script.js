const loanAmt_Inp=document.getElementById("amount");
const AnnIntRate_Inp=document.getElementById("interest");
const Year_Inp=document.getElementById("years");
const Monthly_Out=document.getElementById("monthly");
const totpay_Out=document.getElementById("total");
const totInt_Out=document.getElementById("totalInterest");
const CalBtn=document.getElementById("calculateBtn");
function Loan_Calc()
{
    const P=parseFloat(loanAmt_Inp.value);
    const I=parseFloat(AnnIntRate_Inp.value);
    const Y=parseInt(Year_Inp.value);
    const M= I/(12*100);
    const N=Y*12;
    const EMI=P*((M*Math.pow(1+M,N))/(Math.pow(1+M,N)-1));
    const TotalPay=EMI*N;
    const TotalInt=TotalPay-P;
    Monthly_Out.textContent=EMI.toFixed(2);
    totpay_Out.textContent=TotalPay.toFixed(2);
    totInt_Out.textContent=TotalInt.toFixed(2);
}

CalBtn.addEventListener("click",Loan_Calc);


