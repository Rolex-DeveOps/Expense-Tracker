import moment from "moment"

export const validateEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

};

export const getInitials = (name) =>{

    if(!name) return "";

    const words = name.split(" ");
    let initals = "";

    for(let i =0;i < Math.min(words.length,2);i++)
    {
        initals +=words[i][0];
    }

    return initals.toUpperCase();
}; 

export const addThousandSeparator = (num) =>{

    if(num == null || isNaN(num)) return "";

    const [integerPart,fractionalPart] = num.toString().split(".");
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return fractionalPart
    ?`${formattedInteger}.${fractionalPart}`
    :formattedInteger;
}

export const prepareExpenseBarChartData = (data = []) => {
  const map = {};

  data.forEach((item) => {
    if (!item?.date || !item?.amount) return;

    const date = new Date(item.date);

    const dayLabel = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    }); // "05 Dec"

    if (!map[dayLabel]) {
      map[dayLabel] = 0;
    }

    map[dayLabel] += Math.abs(item.amount);
  });

  return Object.keys(map).map((day) => ({
    month: day,
    amount: map[day],
  }));
};


 export const prepareIncomeBarChartData =(data=[])=>{

  const sortedData = [...data].sort((a,b)=> new Date(a.date) - new Date(b.date));
  const chartData = sortedData.map((item)=>({
    month:moment(item?.date).format("Do MMM"),
    amount:item?.amount,
    source:item?.source,
  })) ;

  return chartData;
 }

 export const prepareExpenseLineChartData =(data=[])=>{
    
  const sortedData = [...data].sort((a,b)=> new Date(a.date)- new Date(b.date));

  const chartData = sortedData.map((item)=>({
    month:moment(item?.date).format("Do MMM"),
    amount:item?.amount,
    category:item?.category,
  }));

  return chartData;

 };
