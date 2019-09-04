    export interface Image {
        '#text': string;
        size: string;
    }

    export interface Wiki {
        published: string;
        summary: string;
        content: string;
    }

    export interface Album {
        name: string;
        artist: string;
        mbid: string;
        image: Image[];
        listeners: string;
        playcount: string;
        wiki: Wiki;
    }

    export interface favourite {
        album: Album[];
    }



