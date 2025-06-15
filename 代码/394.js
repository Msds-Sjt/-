/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function(s) {
    let res = '',i = 0;
    while(s[i]){
        if(s[i]<'0'||s[i]>'9'){
            res += s[i++];
        }else{
            let num = 0;
            while(s[i]>='0'&&s[i]<='9'){
               num = num*10+(s[i++]-'0');
            }
            i++;
            let cnt = 1,r = i;
            while(cnt){
                r++;
                if(s[r] === '[') cnt++;
                else if(s[r] === ']') cnt--;
            }

            const str = decodeString(s.substr(i,r-i));
            while(num--){
                res += str;
            }
            i = r+1;
        }
    }

    return res;
};