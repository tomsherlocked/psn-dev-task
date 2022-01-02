# Dev task

## Improving mobile navigation

The goal was to improve the mobile navigation for globalcyclingnetwork.com. I chose to improve the video watch interactions, where users can search for, and watch, videos from the GCN channel.

I chose to keep it simple and not make any drastic changes to the overall site experience, however my focus was on increasing searchability - getting users onto the site and finding videos they want, and retention - keeping users on the site.

For Search, I:

- Introduced carousels based on topics/presenters on the homepage, allowing users to quickly find content based on their interests, similar to YouTube playlists. This would entice users in to content they would want to see, rather than just recent videos.
- Reduced the amount of information on the search dropdown - reducing to just video titles and suggested topics. Removing the thumbnails allows more video titles to be shown, which would allow users to quickly find videos without additional distractions. Again, this would get them to content they want to see quicker.
- Gave the option to search for just videos, or for sitewide content. This would enable a single searchbar sitewide, focussing on video but also allowing users to get to other parts of the site.
- Introduced smaller thumbnails on the search results page, allowing more content to be shown.
- Added "related topics", similar to the search suggestion dropdown, to allow users to view similar videos.
- Added facets to sort by video age, popularity and series.

For Retention, I:

- Simplified the video watch page, focussing just on necessary content (e.g. the video), and reduced information fatigue by hiding other information in accordian sections.
- Added carousels on the video watch page, to push users to watch more videos after finishing their first.
- Added carousels based on topics/presenters on the homepage, allowing users to quickly find content based on their interests. This allows users to get to the video watch pages sooner.

For general site UX, I:

- Slightly simplified font sizes into just small/medium and large
- Slightly simplified colours into just `primary-red`, `absolute-black`, `absolute-white` and `average-grey` to ensure brand consistency
- Used react-router to create single page app to give a native feel.

### Future Enhancements

In future, given more time, I would continue these themes of simplicity, navigation improvements and retention, starting initially with the header, mobile menu and presenter sections. I would also unify the look and feel across the entire GCN ecosystem - shop, videos online, app, club. This would give a more unified user experience and keep users engaged for longer as they would feel more engaged on a single site, rather than over a variety of slightly different sites and interfaces. There would be potential at this point to introduce a SPA with serviceworker that could be used to preload top videos and other content for users.

With a larger scope, I would look into augmenting the existing YouTube video data with additional metadata, such as presenters, brands and kit used, as well as traditional stats such as average watch time, views, popularity. This could then be used to create a more expansive experience, allowing a "rich search" of video content for more simplified access to content. Alongside this, using an alternative video streaming platform to the YouTube embed widget would allow for more flexibility and make it easier to collect and use the additional metadata.

With this additional metadata in place, or even using the data currently available from YouTube, the overall UX could be improved further to focus almost solely on enriched search & cycling-specific terminology. For example, instaed of homepage carousels focussing on more traditional filters (presenter or show), you could search specifically for cycling-specific terms - _"UK Gravel rides using GRX"_, _"SPDs vs road cleats for Audax"_ or _"WorldTour interviews with SRAM athletes"_. This would differentiate the GCN site significantly from YouTube and other video platforms, and again increase views and allow users to spend more time on the site consuming content.

### Preparing for production
For a production deployment, I would initially start with the following;

- Purge tailwind classes to reduce CSS size. Optionally, use a CSS preprocessor to scope CSS into specific components rather than global styles.
- Serve static assets over a CDN - such as images and CSS files
- Look into serving additional images (for example thumbnails and banner images) over Imgix or similar, which would support modern webp standards
- Create product build of React and serve this over a static web server. Optionally use an edge platform/modern CDN such as Layer0 to improve page speeds for global users.

If I had control over all aspects of a deployment, I would;
- Set up a toolchain to run some basic tests and deploy into different environments to start a basic devops process.
- Set up some form of autoscaling scaling if running the frontend on a kubernetes style platform
- Set up caching for any APIs and dynamic assets. If using an additional metadata/video API, also set up long term cold storage and regular database replication to ensure video data was preserved.
- Set up tracking using Google Analytics or similar, to track top performing sections of the site

## Installation & Running

- Clone repo
- Create `.env` in the root of the repo and add the given API url in the format`API_URL=<full api url>`
- Install packages with `npm i`
- Run `npm run dataload` to download a copy of the API response (this gets around the CORS issue)
- Run `npm run start` to run the frontend application

### Tech stack
- Bootstrapped using `create-react-app`
- Routing handled by `react-router`
- CSS handled with tailwindCSS
- 3rd party libraries used for accordians, carousels and loading spinners

- I had a CORS issue when hitting the video API from my frontend, so the npm script `npm run dataload` calls the API and writes the results to a static text file. 
### Demo

> Note: The app loads dummy data in for all videos (so search results, etc may not be relevant). In places, random videos are returned to simulate a variety of "real" responses. YouTube "shorts" also return malformed thumbnails so they may not show thumbnails correctly.

- The app runs at `localhost:3000` - this opens up to the homepage, designed for viewing with Google Chrome's iPhone 6 emulation.
- All videos/links are clickable, aside from the dummy header/footer, which are just static images.
- Search using the search bar (results are randomly generated) or navigate through the homepage carousels
- Watch videos and interact with more by clicking through to a video watch page


### Example pages

* [Homepage](http://localhost:3000/)
* [Search results](http://localhost:3000/search/gravel) - replace "gravel" with your search term, or navigate from the search bar
* [Video watch page](http://localhost:3000/watch/dZkUYi3iehY) - replace the video id with your video id, or navigate from a results page

