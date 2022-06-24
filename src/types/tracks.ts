export type Track = {
  album: AlbumSpecifics;
};

export enum ALBUM_GROUP {
  APPEARS_ON = "appears_on",
  ALBUM = "album",
  SINGLE = "single",
  COMPILATION = "compilation",
}

export type AlbumSpecifics = {
  album_type: ALBUM_TYPE;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: AlbumCoverArt[];
  name: string;
  release_date: string;
  release_date_precision: RELEASE_DATE_PRECISE;
  restrictions?: RESTRICTION;
  type: string;
  //`allowed value=album`
  uri: string;
  album_group: ALBUM_GROUP;
  artists: Artist[];
};

export enum ALBUM_TYPE {
  ALBUM = "album",
  SINGLE = "single",
  COMPILATION = "compilation",
}

export type ExternalUrl = {
  spotify: string;
};

export type AlbumCoverArt = {
  url: string;
  height: number;
  width: number;
};

export enum RELEASE_DATE_PRECISE {
  YEAR = "year",
  MONTH = "month",
  DAY = "day",
}

export enum RESTRICTION {
  MARKET = "market",
  PRODUCT = "product",
  EXPLICIT = "explicit",
}

export type Artist = {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  //   `allowedvalue=artist`
  uri: string;
};
