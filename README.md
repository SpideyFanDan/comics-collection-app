# comics-collection-app

## Project Description

A comic book collection app that allows a collector to search for comic books they own and add them to a database to manage their personal collection.
The app uses Django and Python to create an API that stores the collection information for individual users, and React and Bootstraps on the front end with a search function that pulls from the Comic Vine API

## Wireframes

### About page

![About page](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/comic-book-collection-about-page.jpg)

### Comic Book Search page

![Comic Book Search page](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/comic-book-search-page.jpg)

### Comic Book Individual Info modal

![Individual Comic Book modal](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/comic-book-info-modal.jpg)

### Comic Book Personal Collection Page

![Personal Collection page](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/comic-book-personal-collection-page.jpg)

### Comic Book Update-Delete Page

![Update Delete Page](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/comic-book-update-delete-page.jpg)

### Comic Book Additional Info Page (stretch goal)

![Additional Info Page](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/comic-book-add-info-page.jpg)

### Comic Book Mass Add to Collection Page (stretch goal)

![Mass add Page](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/mass-add-from-search-list.jpg)

### User Stories

_**MVP User stories**_

- As a collector, I want to be able to search for a comic book that I own from a list of comic books to see all of its info in one place.
- As a collector, I want to filter the search by title and issue number to narrow down the search.
- As a collector, I want to be able to click on one comic book listing and see the expanded information about that comic including the picture of the cover.
- As a collector, I would like to be able to navigate to the other pages from a navigation bar in the header.
- As a collector, I would like to be able to log in and save my collection to see again when I return to the app/site.
- As a collector, I want to be able to add a comic book I own from the search list to my own collection of comics.
- As a collector, I want to be able to update the information of a comic book in my collection.
- As a collector, I want to be able to click on a button that deletes a comic from my list in case there was a mistake.

_**Post-MVP Stretch Goals**_

- As a collector, I would like to be able to add several comic books at once to my collection instead of just one at a time.
- As a collector, I would like to be able to search through my list to find a specific comic book that I have added to my collection.
- As a collector, I would like to be able to add an image of my personal comic book to my collection.
- As a collector, I would like to be able to add notes about an individual comic book to my collection.

## API

[Comic Vine API](https://comicvine.gamespot.com/api/issues/?api_key=[MyAPIKey]&format=json)

### Comic Book issue API response

![API response](https://github.com/SpideyFanDan/comic-book-organizer/blob/87be78c316c5db2bde388e9bbecd6c9441b25cd2/Wireframes/API-screenshot.png)

## Component Hierarchy (frontend)

![Component Hierarchy](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/component-hierarchy.jpg)

## Architecture Pattern (backend)

![Architecture Pattern](https://github.com/SpideyFanDan/comics-collection-app/blob/master/wireframes/architecture-pattern.jpg)
