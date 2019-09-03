export interface Image {
    '#text': string;
    size: string;
}

export interface Artist {
    name: string;
    listeners: string;
    mbid: string;
    url: string;
    streamable: string;
    image: Image[];
}

export interface Topartists {
    artist: Artist[];
}

export interface apiData {
    topartists: Topartists;
}


