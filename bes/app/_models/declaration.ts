export class Declaration {

    public object: string;
    public createdAt: number;
    public status: string;
    public createdBy: string;
    public lastModifiedAt: number;
    public reference: string;
    public floor: string;
    public place: string;
    public description: string;
    public pictureList: any[];
    public commentList: any[];

    constructor(data: any) {
        this.object = data.object;
        this.createdAt = data.createdAt;
        this.status = data.status;
        this.reference = data.reference;
        this.createdBy = data.createdBy;
        this.lastModifiedAt = data.lastModifiedAt;
        this.floor = data.floor;
        this.place = data.place;
        this.description = data.description;
        this.pictureList = data.pictureList;
        this.commentList = data.commentList;
    }
}