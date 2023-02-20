## Basic Prismic Next.js Starter using Slice Machine

### Purpose

Develop a basic homepage with mock content to learn how to use Prismic's Slice Machine with Next.js.

The page has four sections: Header, Hero, Plan Grid, and Footer. A layout is used for the head of the website and wraps the Header and Footer components around the page content as well as passing the currency context provider.

The Header component contains the Navigation slice so links can be added and edited using Prismic.

The Hero slice uses CSS Grid so the background image can be updated using Prismic.

The currency select uses a context provider to pass the value from the Header component to the Plan Grid slice to update the currency of the plan prices.

### Screenshot

![Next.js Slice Machine Website Screenshot](https://user-images.githubusercontent.com/26024131/219398683-8cfac003-9cf3-4749-9f75-d24e63a28a11.png)

### View Website

To view the website, clone this git repository using `git clone https://github.com/louisefindlay23/prismicsm-nextjs.git` and then in the terminal, run `npm start`. On first run, you may need to build the website first using `npm run build`. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

If you wish to run Slice Machine to view, edit and create the slices, run `npm run slicemachine` in a new terminal as well and open [http://localhost:9999](http://localhost:9999) in your browser to view Slice Machine.

### Resources Used

#### Tutorials

- **[Getting Started - Next.js Docs](https://nextjs.org/docs/getting-started)** - to create a basic Next.js app using `create-next-app`
- **[Set Up Prismic (Next.js) - Prismic Docs](https://prismic.io/docs/setup-nextjs)** - to use as a getting started guide for Slice Machine with `create-next-app`
- **[Navigation Menus (Next.js) - Prismic Docs](https://prismic.io/docs/navigation-menus-nextjs)** - to use to help model navigation
- **[State Management In Next.js - Smashing Magazine](https://www.smashingmagazine.com/2021/08/state-management-nextjs)** - to understand state management in React to pass currency between select in `Header` and the prices in `FeatureGrid`.

#### CSS

- **[Backdrop Filter - CSS Tricks](https://css-tricks.com/the-backdrop-filter-css-property)** - to use the backdrop-filter property for the Hero slice
- **[Positioning Overlay Content with CSS Grid - CSS Tricks](https://css-tricks.com/positioning-overlay-content-with-css-grid)** - to use CSS Grid for the background image so the image can be set in Prismic.
- **[Beautiful CSS `box-shadow` Examples - CSS Scan](https://getcssscan.com/css-box-shadow-examples)** - to obtain CSS for a `box-shadow` for the pricing cards

#### Design

- **[Pricing Table Module - PowerPack for Beaver Builder](https://wpbeaveraddons.com/demo/pricing-table-module)** - used as design inspiration for the pricing cards
