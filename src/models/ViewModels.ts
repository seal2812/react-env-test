export interface FeedbackImageInput {
    imageName: string;
    hasGraffiti: boolean;
    isTrain: boolean;
    userName: string;
}

export interface ReportToSapInput {
    imageName: string;
    userName: string;
    trainType: string;
    litraNumber: string;
    wagonNumber: string;
    wagonSide: string;
    reportType: string;
}