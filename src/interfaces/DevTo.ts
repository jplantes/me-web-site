export interface DevTo {
  type_of:                  string;
  id:                       number;
  title:                    string;
  description:              string;
  readable_publish_date:    string;
  slug:                     string;
  path:                     string;
  url:                      string;
  comments_count:           number;
  public_reactions_count:   number;
  collection_id:            null;
  published_timestamp:      string;
  positive_reactions_count: number;
  cover_image:              null | string;
  social_image:             string;
  canonical_url:            string;
  created_at:               string;
  edited_at:                null | string;
  crossposted_at:           null;
  published_at:             string;
  last_comment_at:          string;
  reading_time_minutes:     number;
  tag_list:                 string[];
  tags:                     string;
  user:                     User;
}

export interface User {
  name:             string;
  username:         string;
  twitter_username: null;
  github_username:  string;
  user_id:          number;
  website_url:      null;
  profile_image:    string;
  profile_image_90: string;
}
