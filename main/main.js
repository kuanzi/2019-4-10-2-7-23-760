module.exports = function main(inputs) {
    price =  taxi(inputs['distance'], inputs['parkTime']);
    return Math.round(price);
};

function taxi(distance , parkTime){
    /*
    功能描述：出租车计价问题
    1. 起步价是两公里以内6块；
    2. 出租车的运价是每公里0.8元；
    3. 八公里起会加收50%的每公里运价；
    4. 停车等待时加收每分钟0.25元；
    5. 最后计价的时候司机会四舍五入只收整块钱。    
    Input params：
    distance:公里数，wait_time:等待时间
    Output:
    price:最终支付价格
    */
    var distance_money =0;  //路程费用
    if(distance <= 2){
        distance_money = 6 ; //2公里以内 起步价6元
    }else if(distance > 2 && distance <= 8){
        distance_money = 6 + (distance - 2) * 0.8;
    }else if(distance > 8){
        distance_money = 6 + 6 * 0.8 + ( distance - 8) * 1.2;
    }

    var wait_money = 0; // 等待费用
    wait_money = parkTime * 0.25;

    return wait_money + distance_money;
}
//测试
// console.log(taxi(2 , 0))
