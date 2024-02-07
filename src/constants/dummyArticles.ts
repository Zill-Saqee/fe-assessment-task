import { Article } from "./types";

const dummyArticles: Article[] = [
  {
    uri: "nyt://article/cbf231b5-fb7c-5d8f-bce4-22071443a558",
    url: "https://www.nytimes.com/2024/02/06/us/politics/ronna-mcdaniel-rnc-trump.html",
    id: 100000009300608,
    asset_id: 100000009300608,
    source: "New York Times",
    published_date: "2024-02-06",
    updated: "2024-02-07 00:14:42",
    section: "U.S.",
    subsection: "Politics",
    nytdsection: "u.s.",
    adx_keywords: "Presidential Election of 2024;United States Politics and Government;Appointments and Executive Changes;Voter Fraud (Election Fraud);McDaniel, Ronna Romney;Trump, Donald J;Whatley, Michael;Republican National Committee;Republican Party",
    column: null,
    byline: "By Maggie Haberman, Shane Goldmacher, Jonathan Swan and Annie Karni",
    type: "Article",
    title: "Ronna McDaniel, R.N.C. Chairwoman, Plans to Step Down",
    abstract: "Donald Trump is likely to back a supporter of his false claims of election fraud, Michael Whatley, the head of the North Carolina G.O.P., to replace her.",
    des_facet: ["Presidential Election of 2024", "United States Politics and Government", "Appointments and Executive Changes", "Voter Fraud (Election Fraud)"],
    org_facet: ["Republican National Committee", "Republican Party"],
    per_facet: ["McDaniel, Ronna Romney", "Trump, Donald J", "Whatley, Michael"],
    geo_facet: [],
    media: [
      {
        type: "image",
        subtype: "photo",
        caption: "Ronna McDaniel has faced months of pressure to step down from the Republican Party’s leadership.",
        copyright: "Sophie Park for The New York Times",
        approved_for_syndication: 1,
        'media-metadata': [
          {
            url: "https://static01.nyt.com/images/2024/02/06/multimedia/06pol-rnc-replacement-1-lhvc/06pol-rnc-replacement-1-lhvc-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75
          },
          {
            url: "https://static01.nyt.com/images/2024/02/06/multimedia/06pol-rnc-replacement-1-lhvc/06pol-rnc-replacement-1-lhvc-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210
          },
          {
            url: "https://static01.nyt.com/images/2024/02/06/multimedia/06pol-rnc-replacement-1-lhvc/06pol-rnc-replacement-1-lhvc-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440
          }
        ]
      }
    ],
    eta_id: 0
  },
  // Add more dummy articles as needed
];

export default dummyArticles;
