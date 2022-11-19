export interface SourceMeta {
    trainNo: string;
    lineId: string;
    track: string;
    direction: string;
    destinationStation: string;
    startStation: string;
    trainType: string;
    litraNumber: string;
    wagonNumber: string;
    wagonSide: string;
    litraMatch: boolean;
}

export interface Image {
    name: string;
    url: string;
    probabilityGraffiti: number;
    sourceMatch: boolean;
    sourceMeta: SourceMeta;
}
 