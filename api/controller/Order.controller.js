// import mongoose from "mongoose";
import { Order } from "../model/Order.model.js";

export const getTotalSale = async (req,res,next) => {
    try {
        const orders=await Order.find();
        let total=0;
        for (let index = 0; index < orders.length; index++) {
            total += orders[index].totalAmount;
        }
        res.json({total_sales:total}).status(200)
    } catch (error) {
        next(error)
    }
};

export const getDistributedSale = async (req,res,next) => {
    try {
        const orders=await Order.find();
        const category_sale=new Map()
        let total1=0,total2=0;
        for (let index = 0; index < orders.length; index++) {
            let sell=0;
            total2+=orders[index]?.totalAmount;
            for(let j=0;j<orders[index].items.length;j++){
                const key=orders[index].items[j].category
                const value=orders[index].items[j].price*((100-orders[index].items[j]?.discountPercentage)/100)*orders[index].items[j].quantity;
                total1+=value;
                category_sale.set(key, Math.round(value + (category_sale.has(key) ? category_sale.get(key) : 0)));
            }
            // total += orders[index].totalAmount;
        }
        const keyValueArray = Array.from(category_sale);
        keyValueArray.sort((a, b) => -a[1] + b[1]); 
        let brands=[],brand_share=[]
        for (let index = 0; index < keyValueArray.length; index++) {
            const element = keyValueArray[index];
            brands.push(element[0]);
            brand_share.push(element[1]);
            
        }
        res.json({"brands":brands,"brand_share":brand_share,total1,total2}).status(200)
    } catch (error) {
        next(error)
    }
};
