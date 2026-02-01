# DJS05: Show Detail Page with Routing and Navigation

## Project Overview

In this project, you will build a podcast show detail page as part of a larger podcast browsing app. When users select a show from the homepage or listing page, they should be taken to a dedicated page that displays all details about that show. The app will support dynamic routing so each show has its own unique URL.

You will implement data fetching based on the show ID in the URL, handle loading and error states gracefully, and ensure a smooth user experience by preserving search filters and pagination when users navigate back to the homepage. Additionally, you will build a season navigation system allowing users to expand or switch between seasons to browse episodes efficiently.

This project will demonstrate your ability to work with dynamic routes, manage state across pages, handle asynchronous data, and create a clean, maintainable React codebase.


![alt text](<Show Page Podcast.png>)


---

## Core Objectives

- Implement **dynamic routing** for unique show detail pages.
- Pass the correct show ID via route parameters and use it to **fetch specific show data**.
- Gracefully handle **loading, error, and empty states** during data fetching.
- Display comprehensive show details including title, image, description, genres, and last updated date.
- Preserve previous **filters and search state** when navigating back to the homepage.
- Create an intuitive **season navigation** UI to expand and switch between seasons without excessive scrolling.
- Display episode information clearly with numbering, titles, images, and shortened descriptions.
- Maintain **high code quality** with documentation (JSDoc) and consistent formatting.

---

### API Endpoints

Data can be called via a `fetch` request to the following three endpoints. Note that there is not always a one-to-one mapping between endpoints and actual data structures. Also note that **\*`<ID>`** indicates where the dynamic ID for the requested item should be placed. For example: `[https://podcast-api.netlify.app/genre/3](https://podcast-api.netlify.app/genre/3)`\*

| URL                                          |                                                                                        |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| `https://podcast-api.netlify.app`            | Returns an array of PREVIEW                                                            |
| `https://podcast-api.netlify.app/genre/<ID>` | Returns a GENRE object                                                                 |
| `https://podcast-api.netlify.app/id/<ID>`    | Returns a SHOW object with several SEASON and EPISODE objects directly embedded within |

### Genre Titles

Since genre information is only exposed on `PREVIEW` by means of the specific `GENRE` id, it is recommended that you include the mapping between genre id values and title in your code itself:

| ID  | Title                    |
| --- | ------------------------ |
| 1   | Personal Growth          |
| 2   | Investigative Journalism |
| 3   | History                  |
| 4   | Comedy                   |
| 5   | Entertainment            |
| 6   | Business                 |
| 7   | Fiction                  |
| 8   | News                     |
| 9   | Kids and Family          |

## Deliverables

1. **Homepage / Listing Page**

   - List of shows with clickable links or buttons that navigate to each show's detail page.
   - Filters and search functionality that maintain state when navigating back from detail pages.

2. **Dynamic Show Detail Page**

   - A unique page for each show, accessible via a dynamic route.
   - Fetch and display show details including:
     - Title
     - Large podcast image
     - Description
     - Genre tags
     - Last updated date (formatted)
   - Display loading indicator while fetching data.
   - Display user-friendly error message if fetching fails.
   - Handle empty states gracefully (e.g., show not found).

3. **Season Navigation Component**

   - UI to expand/collapse seasons.
   - Show season title and episode count.
   - List episodes per season including:
     - Episode number
     - Episode title
     - Season image
     - Shortened episode description

4. **State Preservation**

   - Maintain applied filters and search terms when navigating back to the homepage from a show detail page.

5. **Code Quality**

   - Well-structured, modular React components.
   - JSDoc comments for all major functions and modules.
   - Consistent and readable formatting across all files.

6. **Responsive Design**

   - The UI adapts smoothly across different device sizes (mobile, tablet, desktop).

7. **README Documentation**
   - Brief project overview.
   - Instructions for running the project locally.
   - Description of main features and any known limitations.

---

# 🎧 React Podcast Explorer

## 🚀 Overview

The **React Podcast Explorer** is a podcast browsing application that allows users to **search**, **sort**, **filter by genre**, and **paginate** through a list of podcast shows. Users can select a show to view a **dedicated show detail page** with comprehensive information, including seasons and episodes.

This project builds on a previous podcast listing app and extends it by introducing **dynamic routing**, **show detail pages**, **season navigation**, and **state preservation** when navigating between pages.

The application is designed to provide a **smooth and consistent user experience**, ensuring that filters and search selections remain applied when users return to the homepage.

---

## ✨ Features

### Homepage / Listing Page
- **Live Search**: Search podcasts by title with instant results.
- **Sorting Options**: Sort podcasts by newest, oldest, title A–Z, or title Z–A.
- **Genre Filtering**: Filter podcasts by genre.
- **Pagination**: Browse podcasts in pages of 8 items.
- **Synchronized UI Controls**: Search, sort, filter, and pagination work together seamlessly.
- **Loading & Error States**: Clear feedback during data fetching or failures.
- **Error Boundary Handling**: Displays a fallback UI if a component crashes.

### Show Detail Page
- **Dynamic Routing**: Each podcast has its own unique URL.
- **Show Details**:
  - Podcast title
  - Large cover image
  - Description
  - Genre tags
  - Last updated date (formatted)
- **Graceful Data Handling**:
  - Loading indicator while fetching show data
  - User-friendly error messages
  - Empty state handling if data is missing

### Season Navigation
- **Expandable Seasons**: Users can expand or collapse seasons to avoid long scrolling.
- **Season Information**:
  - Season title
  - Episode count per season
- **Episode Details**:
  - Episode number
  - Episode title
  - Season image displayed next to episodes
  - Shortened episode description for quick scanning

### State Preservation
- Filters, search terms, sorting, and pagination remain applied when navigating:
  - From the homepage to a show detail page
  - Back to the homepage from a show detail page

---

## 🛠️ Tech Stack

- **React** (functional components & hooks)
- **React Router** (dynamic routing)
- **JavaScript (ES6+)**
- **Fetch API**
- **React Context API** (shared state management)
- **CSS3** (responsive styling)

---

## 📖 How to Use

1. Start the application locally or access the live demo (if available).
2. Browse podcasts on the homepage using search, filters, and sorting options.
3. Click on a podcast card to view its **show detail page**.
4. Explore seasons and episodes using the **expandable season navigation**.
5. Use the browser back button or navigation links to return to the homepage with all filters preserved.

---

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd DJS05
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser:

   ```
   http://localhost:5173
   ```

---

## 🧪 Code Quality

- Clean, modular React component structure.
- Reusable components for maintainability.
- Centralised state management using React Context.
- Dynamic routing with clear separation of concerns.
- Major components and utilities documented using **JSDoc**.
- Consistent formatting across JavaScript, JSX, HTML, and CSS.

---

## 🎯 Future Improvements

- Persist filter and search state across page refreshes using localStorage.
- Add playback functionality for episodes.
- Improve accessibility and keyboard navigation.
- Add animations for season expand/collapse interactions.