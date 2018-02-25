module.exports = function getZerosCount(number, base) {
    
    function GetSimpleArr(){
        a = [];
        for(i = 1;i <= base;i++){
           a[i-1] = i;          
        }
        for(i = 1;i <= base;i++){
            if(a[i] !== null){
                for(j = i;j <= base;j++){
                    if(a[j]%a[i] == 0 && a[j] !==a[i]){
                        a[j] = null;
                    }
                }
            }           
        }
        i = 0;
        k = 0;
        simpleArr = [];
        while(i<a.length){
            if(a[i] != null){
                simpleArr[k] = a[i];
                k++;
            }
            i++;
        }
        return simpleArr;
    }
    
    function getSimple(simpleArr){
        k = 0;
        i = simpleArr.length-1;
        while(base%simpleArr[i] != 0){
            i--;
        }
        while(base%simpleArr[i] == 0){
            base/=simpleArr[i];
            k++;
        }
        return [simpleArr[i],k];
    } 
    
    simple = getSimple(GetSimpleArr());
    counter = 0;
    while(number > 1){
        number = Math.floor(number/simple[0]);
        counter+=number;
    }
    
    return Math.floor(counter/simple[1]); 
}