const SHA256=require('crypto-js/sha256');
class Block{
    constructor(index, data, previewHash=''){
        this.index=index;
        this.date= new Date();
        this.data=data;
        this.previewHash=previewHash;
        this.currentHash='';
    }
    getHash(){
        return SHA256(this.index+this.data);
    }
    
}