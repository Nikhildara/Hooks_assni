import React from "react";

const searchContext=React.createContext({
    searchData:'',
    searchFun:()=>{}
})

export  default searchContext