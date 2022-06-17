export type SpotifyPlayerError = 'initialization_error' | 'authentication_error' | 'account_error' | 'playback_error';

export type SpotifyPlayerTrack = {
  album: {
    images: {
      size: string;
      url: string;
      width: number;
      height: number;
    }[];
    name: string;
    uri: string;
  };
  artists: {
    name: string;
    uri: string;
    url: string;
  }[];
  duration_ms: number;
  id: string;
  is_playable: boolean;
  linked_from: {
    uri: string;
    id: string;
  };
  media_type: 'audio' | 'video';
  name: string;
  track_type: 'audio';
  type: 'track' | 'episode' | 'ad';
  uid: string;
  uri: string;
};

export type SpotifyPlayerState = {
  context: {
    uri?: string; // The URI of the context (can be null)
    metadata?: Record<string, string | number>; // Additional metadata for the context (can be null)
  };
  disallows: {
    // A simplified set of restriction controls for
    pausing: boolean; // The current track. By default, these fields
    peeking_next: boolean; // will either be set to false or undefined, which
    peeking_prev: boolean; // indicates that the particular operation is
    resuming: boolean; // allowed. When the field is set to `true`, this
    seeking: boolean; // means that the operation is not permitted. For
    skipping_next: boolean; // example, `skipping_next`, `skipping_prev` and
    skipping_prev: boolean; // `seeking` will be set to `true` when playing an
    // ad track.
  };
  paused: boolean; // Whether the current track is paused.
  position: number; // The position_ms of the current track.
  repeat_mode: 0 | 1 | 2; // The repeat mode. No repeat mode is 0,
  // repeat context is 1 and repeat track is 2.
  shuffle: boolean; // True if shuffled, false otherwise.
  track_window: {
    current_track: SpotifyPlayerTrack; // The track currently on local playback
    previous_tracks: SpotifyPlayerTrack[]; // Previously played tracks. Number can vary.
    next_tracks: SpotifyPlayerTrack[]; // Tracks queued next. Number can vary.
  };
};
