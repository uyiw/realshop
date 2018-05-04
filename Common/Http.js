const getAbort  = function(timeout){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve({error:true,status:408})
        },timeout)
    });
}
const getFetch = async (url,config,timeout)=>{
    let res =  await Promise.race([ fetch(url,config), getAbort(timeout)]);
    return res;
}


class Http {
    async request(url,type,data,timeout){
        let config = {
            method: type,
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // cache: 'no-cache',
            body: (data ? JSON.stringify(data) : null),
        };

        try {
            let res = await getFetch(url,config,timeout);
            if(res.ok){
                return res.json()
            }else{
                return {error:true,code:res.status}
            }

        } catch (error) {
            return {error:true,code:error};
        }
    }

    async get(url,timeout=2000){
        let data = await this.asyncLoop(2,async (i)=>{
            return await this.request(url,'GET','', timeout)
        })
        return data;
    }

    async post(url,param,timeout=2000){
        return await this.asyncLoop(2,this.request(url,'POST', param, timeout));
    }

    async asyncLoop(num,fun){

        let i = 0;
        let next = async (i)=>{
            let res = await fun(i);
            i++
            if(res.error && i <num){
                return await next(i);
            }else{
                return res
            }
        }
        return await next(i);
    }
}   
export default new Http();