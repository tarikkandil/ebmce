export class Comment {
    public createdAt: number;
    public lastModifiedAt: number;
    public reference: string
    public createdBy: string;
    public content: string;
    public seen: boolean

    constructor(data: any) {
         this.createdAt = data.createdAt;
        this.lastModifiedAt = data.lastModifiedAt;
        this.reference = data.reference;
         this.createdBy = data.createdBy;
        this.content = data.content;
        this.seen = data.seen;
    }
  
}