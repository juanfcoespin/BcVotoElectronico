class Block{
    constructor(index, data, previewHash=''){
        this.index=index;
        this.date= new Date();
        this.data=data;
        this.previewHash=previewHash;
        this.currentHash='';
    }
    createHash(){
        this.currentHash='';
    }
}