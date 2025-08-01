// api domains
const domain = {
  www:      'https://www.crunchyroll.com',
  api:      'https://api.crunchyroll.com',
  api_beta: 'https://beta-api.crunchyroll.com',
  hd_www:   'https://www.hidive.com',
  hd_api:   'https://api.hidive.com',
  hd_new:   'https://dce-frontoffice.imggaming.com'
};

export type APIType = {
  bundlejs: string,
  newani: string,
  search1: string,
  search2: string,
  rss_cid: string,
  rss_gid: string
  media_page: string
  series_page: string
  auth: string
  // mobile api
  search3: string
  session: string
  collections: string
  // beta api
  defaultUserAgent: string,
  profile: string
  cmsToken: string
  browse_all_series: string,
  search: string
  cms: string
  cms_bucket: string
  browse: string
  drm: string;
  drm_widevine: string;
  drm_playready: string;
  streaming: string;
  /**
   * Header
   */
  crunchyDefHeader: Record<string, string>,
  crunchyAuthHeader: Record<string, string>,
  hd_apikey: string,
  hd_devName: string,
  hd_appId: string,
  hd_clientWeb: string,
  hd_clientExo: string,
  hd_api: string,
  hd_new_api: string,
  hd_new_apiKey: string,
  hd_new_version: string,
}

// api urls
const api: APIType = {
  // web
  bundlejs:          'https://static.crunchyroll.com/vilos-v2/web/vilos/js/bundle.js',
  newani:            `${domain.www}/rss/anime`,
  search1:           `${domain.www}/ajax/?req=RpcApiSearch_GetSearchCandidates`,
  search2:           `${domain.www}/search_page`,
  rss_cid:           `${domain.www}/syndication/feed?type=episodes&id=`, // &lang=enUS
  rss_gid:           `${domain.www}/syndication/feed?type=episodes&group_id=`, // &lang=enUS
  media_page:        `${domain.www}/media-`,
  series_page:       `${domain.www}/series-`,
  auth:              `${domain.www}/auth/v1/token`,
  // mobile api
  search3:           `${domain.api}/autocomplete.0.json`,
  session:           `${domain.api}/start_session.0.json`,
  collections:       `${domain.api}/list_collections.0.json`,
  defaultUserAgent:  'Crunchyroll/4.83.0 (bundle_identifier:com.crunchyroll.iphone; build_number:4254815.324030705) iOS/19.0.0 Gravity/4.83.0',
  profile:           `${domain.www}/accounts/v1/me/profile`,
  cmsToken:          `${domain.www}/index/v2`,
  search:            `${domain.www}/content/v2/discover/search`,
  cms:               `${domain.www}/content/v2/cms`,
  cms_bucket:        `${domain.api_beta}/cms/v2`,
  browse:            `${domain.www}/content/v1/browse`,
  browse_all_series: `${domain.www}/content/v2/discover/browse`,
  // beta api
  // broken - deprecated since 06.05.2025
  drm:               `${domain.api_beta}/drm/v1/auth`,
  // new drm endpoints
  drm_widevine:      `${domain.www}/license/v1/license/widevine`,
  // playready endpoint currently broken
  drm_playready:     `${domain.www}/license/v1/license/playReady`,
  // endpoint to get active streaming sessions
  streaming:     `${domain.www}/playback/v1/sessions/streaming`,
  crunchyDefHeader: {},
  crunchyAuthHeader: {},
  //hidive API
  hd_apikey:        '508efd7b42d546e19cc24f4d0b414e57e351ca73',
  hd_devName:       'Android',
  hd_appId:         '24i-Android',
  hd_clientWeb:     'okhttp/3.4.1',
  hd_clientExo:     'smartexoplayer/1.6.0.R (Linux;Android 6.0) ExoPlayerLib/2.6.0',
  hd_api:           `${domain.hd_api}/api/v1`,
  //Hidive New API
  hd_new_api:        `${domain.hd_new}/api`,
  hd_new_apiKey:     '857a1e5d-e35e-4fdf-805b-a87b6f8364bf',
  hd_new_version:    '6.0.1.bbf09a2'
};

api.crunchyDefHeader = {
  'User-Agent': api.defaultUserAgent,
  'Accept': '*/*',
  'Accept-Encoding': 'gzip;q=1.0, compress;q=0.5',
  'Accept-Language': 'de-IT;q=1.0, it-IT;q=0.9, en-GB;q=0.8',
  'Connection': 'keep-alive',
  'Host': 'www.crunchyroll.com'
};

// set header
api.crunchyAuthHeader = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  ...api.crunchyDefHeader
};

export {
  domain, api
};
