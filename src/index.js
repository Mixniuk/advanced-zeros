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
    
    function findSimpleInd(i){
        while(base%simpleArr[i] != 0){
            i--;
        }
        return i;
    }
    
    function findCountSimple(simple){
        base1 = base;
        k = 0;
        while(base1%simple == 0){
            base1/=simple;
            k++;
        }
        return [simple,k];
    }
    
    function getSimple(simpleArr){
        l = 0;
        s = [];
        i = findSimpleInd(simpleArr.length-1);
        while (i > 0){
            s[l] = findCountSimple(simpleArr[i]);
            i = findSimpleInd(--i);
            l++;
        }
        return s;
    } 
    
    function findZeros(simple,num){
        counter = 0;
        while(num > 1){
            num = Math.floor(num/simple[0]);
            counter+=num;
        }
        return Math.floor(counter/simple[1]);
    }
    
    simple = getSimple(GetSimpleArr());
    min = 0;
    zeros = [];
    for(i = 0;i < simple.length;i++){
        zeros[i] = findZeros(simple[i],number);
        if(zeros[min] > zeros[i]) min = i;
    };
    
    return zeros[min]; 
}