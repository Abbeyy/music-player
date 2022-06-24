export type Track = {
  album: AlbumSpecifics;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrl;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Track;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

type Restrictions = {
  reason: RESTRICTION;
};

type ExternalIds = {
  isrc: string;
  ean: string;
  upc: string;
};

enum ALBUM_GROUP {
  APPEARS_ON = "appears_on",
  ALBUM = "album",
  SINGLE = "single",
  COMPILATION = "compilation",
}

type AlbumSpecifics = {
  album_type: ALBUM_TYPE;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrl;
  href: string;
  id: string;
  images: AlbumImage[];
  name: string;
  release_date: string;
  release_date_precision: RELEASE_DATE_PRECISE;
  restrictions?: RESTRICTION;
  type: string;
  //`allowed value=album`
  uri: string;
  album_group: ALBUM_GROUP;
  artists: AlbumArtist[];
};

enum ALBUM_TYPE {
  ALBUM = "album",
  SINGLE = "single",
  COMPILATION = "compilation",
}

type ExternalUrl = {
  spotify: string;
};

type AlbumImage = {
  url: string;
  height: number;
  width: number;
};

enum RELEASE_DATE_PRECISE {
  YEAR = "year",
  MONTH = "month",
  DAY = "day",
}

enum RESTRICTION {
  MARKET = "market",
  PRODUCT = "product",
  EXPLICIT = "explicit",
}

type AlbumArtist = {
  external_urls: ExternalUrl;
  href: string;
  id: string;
  name: string;
  type: string;
  //   `allowedvalue=artist`
  uri: string;
};

type Artist = {
  external_urls: ExternalUrl;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: AlbumImage;
  name: string;
  popularity: number;
  type: string; //`allowedvalue=artist`
  uri: string;
};

type Followers = {
  href: string;
  total: number;
};
