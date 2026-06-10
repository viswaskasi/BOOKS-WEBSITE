import './style.css';

// Mock Book and Web Novel Database (Streamlined chapters content)
const booksDatabase = [
  {
    id: '1',
    title: 'The Chronicles of Eldoria',
    author: 'Lyra Vance',
    rating: 4.8,
    chaptersCount: 12,
    category: 'Fantasy',
    type: 'novel',
    cover: '/fantasy_cover.png',
    shortDesc: 'An apprentice scribe unlocks an ancient stone archway, unleashing a forgotten magic.',
    description: 'For a thousand years, the stone archway in the heart of the Eldorian Woods remained silent. It was a relic of an age long forgotten, covered in thick ivy and ancient runes. When Lyra discovers a strange copper key, she opens a gateway to a realm of silver trees and rising shadows.',
    tags: ['Epic Fantasy', 'Magic', 'Adventure'],
    reviews: [
      { name: 'Arthur P.', rating: 5, text: 'Absolutely gripping! The descriptions are magical.' },
      { name: 'MageRead', rating: 4, text: 'A solid beginning to a classic fantasy quest.' }
    ]
  },
  {
    id: '2',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    rating: 4.7,
    chaptersCount: 61,
    category: 'Romance',
    type: 'book',
    cover: '/romance_cover.png',
    shortDesc: 'A classic comedy of manners charting the turbulent relationship between Elizabeth Bennet and Mr. Darcy.',
    description: 'Jane Austen\'s masterpiece set in 19th-century England explores the clash between Elizabeth Bennet, a woman of sharp wit, and Mr. Darcy, a rich, proud aristocrat. The story illustrates how initial misconceptions and expectations hinder true affection.',
    tags: ['Classics', 'Romance', 'British'],
    reviews: [
      { name: 'LizzyFan', rating: 5, text: 'A timeless romance. The dialogue is incredibly sharp.' }
    ]
  },
  {
    id: '3',
    title: 'The Time Machine',
    author: 'H. G. Wells',
    rating: 4.5,
    chaptersCount: 16,
    category: 'Sci-Fi',
    type: 'book',
    cover: '/scifi_cover.png',
    shortDesc: 'A Victorian scientist constructs a machine that projects him into the year 802,701.',
    description: 'The Time Traveller journeys to the far future, where he discovers humanity has split into two species: the surface-dwelling Eloi and the underground Morlocks. A dark warning about social inequality and the future of evolution.',
    tags: ['Sci-Fi', 'Time Travel', 'Classics'],
    reviews: [
      { name: 'CyberReader', rating: 4, text: 'Mind-bending for its time, still holds up well.' }
    ]
  },
  {
    id: '4',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    rating: 4.8,
    chaptersCount: 12,
    category: 'Mystery',
    type: 'novel',
    cover: '/mystery_cover.png',
    shortDesc: 'A collection of detective stories featuring the brilliant consultant detective Sherlock Holmes.',
    description: 'Dr. John Watson documents the extraordinary cases resolved by his friend, the master of observation and deductive reasoning, Sherlock Holmes. From blackmail in high society to bizarre clubs, Holmes unravels the most complex mysteries.',
    tags: ['Detective', 'Mystery', 'Crime'],
    reviews: [
      { name: 'WatsonApprentice', rating: 5, text: 'Holmes\' reasoning is magical to watch.' }
    ]
  },
  {
    id: '5',
    title: 'Mastering the Code',
    author: 'Alex Carter',
    rating: 4.6,
    chaptersCount: 15,
    category: 'Education',
    type: 'book',
    cover: '/education_cover.png',
    shortDesc: 'A beginner-friendly guide to computer science fundamentals and modern software design.',
    description: 'Learn programming fundamentals, systems architecture, and engineering best practices from scratch. This book provides a step-by-step introduction to computing concepts, variables, control flow, and modular software design.',
    tags: ['Programming', 'Tutorial', 'Education'],
    reviews: [
      { name: 'DevNovice', rating: 5, text: 'Explanations are so clear. The best beginner coding book.' }
    ]
  },
  {
    id: '6',
    title: 'The Silent Witness',
    author: 'Clara Sterling',
    rating: 4.6,
    chaptersCount: 18,
    category: 'Thriller',
    type: 'novel',
    cover: '/thriller_cover.png',
    shortDesc: 'A cold rain, a shivering witness, and a cryptic leather journal containing dangerous secrets.',
    description: 'When Detective Sarah Lund is called to interrogate a silent young boy clutching a leather journal, she uncovers a conspiracy that stretches to the highest levels of city governance. She must decipher the journal before the witness is silenced.',
    tags: ['Thriller', 'Crime', 'Suspense'],
    reviews: [
      { name: 'PlotTwistFan', rating: 4, text: 'Incredibly atmospheric opening. Lund is a great character.' }
    ]
  },
  {
    id: '7',
    title: 'The Midnight Clue',
    author: 'Arthur Conan Doyle',
    rating: 4.6,
    chaptersCount: 8,
    category: 'Mystery',
    type: 'book',
    cover: '/mystery_cover.png',
    shortDesc: 'A high-stakes mystery surrounding a lost diamond and a ticking clock in Victorian London.',
    description: 'Sherlock Holmes is hired by a foreign prince to retrieve a stolen royal diamond. With only twenty-four hours before the thief flees England, Holmes and Watson follow a trail of clues from high-end parlors to the London docks.',
    tags: ['Mystery', 'Victorian', 'Detective'],
    reviews: [
      { name: 'HolmesClub', rating: 5, text: 'A short and highly entertaining Sherlock Holmes mystery.' }
    ]
  },
  {
    id: '8',
    title: 'Beyond the Horizon',
    author: 'H. G. Wells',
    rating: 4.7,
    chaptersCount: 24,
    category: 'Sci-Fi',
    type: 'novel',
    cover: '/scifi_cover.png',
    shortDesc: 'A serialized space expedition exploring a wormhole at the edge of the solar system.',
    description: 'In the year 2140, a group of scientists aboard the spacecraft Pioneer embark on a one-way trip through a newly discovered wormhole. What they find on the other side challenges the very laws of physics and time.',
    tags: ['Sci-Fi', 'Space', 'Adventure'],
    reviews: [
      { name: 'StarGazer', rating: 4, text: 'Breathtaking scope. The hard science element is fantastic.' }
    ]
  },
  {
    id: '9',
    title: 'Whispers of the Heart',
    author: 'Jane Austen',
    rating: 4.8,
    chaptersCount: 30,
    category: 'Romance',
    type: 'novel',
    cover: '/romance_cover_2.png',
    shortDesc: 'Two rival artists in Paris are forced to share a studio, discovering inspiration and love.',
    description: 'Set in the romantic streets of Paris, this modern romance tells the story of Sophia, a classical painter, and Julian, an abstract artist. Forced to share a studio due to a rental mix-up, they clash and eventually inspire each other.',
    tags: ['Romance', 'Paris', 'Artistic'],
    reviews: [
      { name: 'ParisianDreamer', rating: 5, text: 'Such a sweet, lovely story about art and connection.' }
    ]
  },
  {
    id: '10',
    title: 'The Silent Cry',
    author: 'Clara Sterling',
    rating: 4.6,
    chaptersCount: 20,
    category: 'Thriller',
    type: 'book',
    cover: '/thriller_cover.png',
    shortDesc: 'Detective Sarah Lund races against time to translate a hidden journal containing a conspiracy.',
    description: 'Following the events of The Silent Witness, Detective Sarah Lund uncovers a deeper layer of the city conspiracy. With the journal translated, she becomes the target of powerful figures who will stop at nothing to bury the truth.',
    tags: ['Thriller', 'Crime', 'Suspense'],
    reviews: [
      { name: 'ThrillerFanatic', rating: 4, text: 'A relentless sequel that keeps the tension high throughout.' }
    ]
  },
  {
    id: '11',
    title: 'JavaScript for Beginners',
    author: 'Alex Carter',
    rating: 4.5,
    chaptersCount: 10,
    category: 'Education',
    type: 'novel',
    cover: '/education_cover.png',
    shortDesc: 'An interactive coding journey explaining modern JS concepts using game development.',
    description: 'Learn programming by doing! This guide takes you from writing your first console log to building a working HTML5 game, explaining functions, objects, loops, and event handling along the way in a simple manner.',
    tags: ['Programming', 'JavaScript', 'Beginners'],
    reviews: [
      { name: 'CodeNewbie', rating: 5, text: 'The game-building projects made the logic click for me!' }
    ]
  },
  {
    id: '12',
    title: 'The Lost Kingdom',
    author: 'Lyra Vance',
    rating: 4.9,
    chaptersCount: 40,
    category: 'Fantasy',
    type: 'book',
    cover: '/fantasy_cover_2.png',
    shortDesc: 'An epic quest to retrieve a magical scepter and restore peace to the realm of Aethelgard.',
    description: 'When the Dark Lord steals the Silver Scepter, the magical barrier keeping the monsters at bay collapses. A young ranger must assemble a team of guardians to venture into the ruined capital and retrieve it.',
    tags: ['Fantasy', 'Quest', 'Action'],
    reviews: [
      { name: 'HighFantasyLover', rating: 5, text: 'An absolute masterpiece of worldbuilding and adventure.' }
    ]
  }
];

// App State Management
const state = {
  activeView: 'home-view',
  selectedBook: null,
  readerFontSize: 1.15, // base layout font size in rem
  readerTheme: 'light',
  searchQuery: '',
  selectedCategoryFilter: 'All',
  selectedTypeFilter: 'All'
};

/**
 * Routing Utility: Switches views, updates active navbar links,
 * resets viewport scroll positions, and cleans up reading layouts.
 */
function navigateTo(viewId) {
  state.activeView = viewId;
  
  // Toggle visibility of section views
  document.querySelectorAll('.view-section').forEach(view => {
    const shouldShow = (view.id === viewId);
    view.classList.toggle('active', shouldShow);
  });
  
  // Update nav links active styling indicators
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(link => {
    const isCurrentView = (link.getAttribute('data-view') === viewId);
    link.classList.toggle('active', isCurrentView);
  });
  
  // Reset scroll bar offset position
  window.scrollTo(0, 0);
  
  // Clean up any reading theme body filters
  document.body.classList.remove('theme-sepia', 'theme-dark');
  
  if (viewId === 'reader-view') {
    applyReaderTheme(state.readerTheme);
  } else {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
      searchContainer.classList.remove('active');
    }
  }
  
  // Close drawer layouts on navigation
  const mobileNav = document.getElementById('mobile-navigation');
  if (mobileNav) {
    mobileNav.classList.remove('open');
  }
}

/**
 * Render Home View lists (featured books + trending novel layouts)
 */
function renderHome() {
  const featuredGrid = document.querySelector('.featured-books-grid');
  if (featuredGrid) {
    // Take the first 4 books as featured
    const featuredBooks = booksDatabase.slice(0, 4);
    featuredGrid.innerHTML = featuredBooks.map(createBookCardHTML).join('');
  }

  const trendingCarousel = document.querySelector('.trending-carousel');
  if (trendingCarousel) {
    // Filter out items that are serialized web novels
    const webNovels = booksDatabase.filter(book => book.type === 'novel');
    trendingCarousel.innerHTML = webNovels.map(novel => {
      const escapedTitle = encodeURIComponent(novel.title);
      return `
        <div class="novel-card" data-id="${novel.id}">
          <div class="novel-cover-container">
            <img src="${novel.cover}" alt="${novel.title}" onerror="this.src='https://via.placeholder.com/240x300?text=${escapedTitle}'">
          </div>
          <div class="novel-info">
            <div class="novel-title">${novel.title}</div>
            <div class="novel-author">By ${novel.author}</div>
            <div class="novel-chapters">${novel.chaptersCount} Chapters</div>
          </div>
        </div>
      `;
    }).join('');
  }
}

/**
 * Card Markup Template Builder
 */
function createBookCardHTML(book) {
  const escapedTitle = encodeURIComponent(book.title);
  const badgeHTML = (book.type === 'novel') ? '<span class="book-badge">Web Novel</span>' : '';
  
  return `
    <article class="book-card" data-id="${book.id}">
      <div class="book-cover-container">
        <img class="book-cover" src="${book.cover}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x450?text=${escapedTitle}'">
        ${badgeHTML}
      </div>
      <div class="book-info">
        <div class="book-meta">
          <span class="tag" style="padding: 0.15rem 0.5rem; font-size: 0.75rem;">${book.category}</span>
          <span class="book-rating">★ ${book.rating.toFixed(1)}</span>
        </div>
        <h3 class="book-title">${book.title}</h3>
        <div class="book-author">By ${book.author}</div>
        <p class="book-desc">${book.shortDesc}</p>
        <button class="btn btn-secondary btn-read-card" style="width: 100%; margin-top: auto; padding: 0.5rem 1rem;">Read Details</button>
      </div>
    </article>
  `;
}

/**
 * Catalog filtering engine. Computes filters dynamically,
 * maps catalog layout, and updates the category sidebar metrics.
 */
function renderCatalog() {
  const gridContainer = document.querySelector('.catalog-books-grid');
  const catalogHeader = document.getElementById('catalog-heading-text');
  if (!gridContainer) return;

  // Filter book list based on active state parameters
  const filtered = booksDatabase.filter(book => {
    // 1. Match search box input
    let matchesSearch = true;
    if (state.searchQuery) {
      const searchVal = state.searchQuery.toLowerCase();
      const titleMatch = book.title.toLowerCase().includes(searchVal);
      const authorMatch = book.author.toLowerCase().includes(searchVal);
      const categoryMatch = book.category.toLowerCase().includes(searchVal);
      matchesSearch = titleMatch || authorMatch || categoryMatch;
    }

    // 2. Match sidebar category selection
    let matchesCategory = true;
    if (state.selectedCategoryFilter !== 'All') {
      matchesCategory = (book.category === state.selectedCategoryFilter);
    }

    // 3. Match format selection (E-books vs Web Novels)
    let matchesType = true;
    if (state.selectedTypeFilter !== 'All') {
      if (state.selectedTypeFilter === 'Books') {
        matchesType = (book.type === 'book');
      } else if (state.selectedTypeFilter === 'Novels') {
        matchesType = (book.type === 'novel');
      }
    }

    return matchesSearch && matchesCategory && matchesType;
  });

  // Calculate dynamic sidebar count metrics
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const filterValue = btn.getAttribute('data-value');
    const isCategoryFilter = btn.classList.contains('category-filter-btn');
    let matchCount = 0;

    if (isCategoryFilter) {
      if (filterValue === 'All') {
        matchCount = booksDatabase.length;
      } else {
        matchCount = booksDatabase.filter(b => b.category === filterValue).length;
      }
    } else {
      if (filterValue === 'All') {
        matchCount = booksDatabase.length;
      } else if (filterValue === 'Books') {
        matchCount = booksDatabase.filter(b => b.type === 'book').length;
      } else if (filterValue === 'Novels') {
        matchCount = booksDatabase.filter(b => b.type === 'novel').length;
      }
    }

    const countBadge = btn.querySelector('.filter-count');
    if (countBadge) {
      countBadge.textContent = matchCount;
    }
  });

  // Set visual header text in the catalog pane
  if (state.searchQuery) {
    catalogHeader.textContent = `Search Results for "${state.searchQuery}" (${filtered.length})`;
  } else if (state.selectedCategoryFilter !== 'All') {
    catalogHeader.textContent = `${state.selectedCategoryFilter} Catalog (${filtered.length})`;
  } else if (state.selectedTypeFilter !== 'All') {
    catalogHeader.textContent = `Trending ${state.selectedTypeFilter} (${filtered.length})`;
  } else {
    catalogHeader.textContent = `All Books & Web Novels (${filtered.length})`;
  }

  // Draw filtered results to layout
  if (filtered.length > 0) {
    gridContainer.innerHTML = filtered.map(createBookCardHTML).join('');
  } else {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
        <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>
        <p style="font-size: 1.125rem; font-weight: 500;">No results found.</p>
        <button id="btn-clear-filters" class="btn btn-primary" style="margin-top: 1rem; padding: 0.5rem 1.25rem;">Clear Filters</button>
      </div>
    `;
  }

  // Attach dynamic listener to clear filter buttons if rendered
  const clearBtn = document.getElementById('btn-clear-filters');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.selectedCategoryFilter = 'All';
      state.selectedTypeFilter = 'All';
      
      const searchBoxInput = document.querySelector('.search-input');
      if (searchBoxInput) searchBoxInput.value = '';

      document.querySelectorAll('.filter-btn').forEach(btn => {
        const filterVal = btn.getAttribute('data-value');
        btn.classList.toggle('active', filterVal === 'All');
      });
      
      renderCatalog();
    });
  }
}

/**
 * Pull detail parameters for a book and load the details page.
 */
function showBookDetails(bookId) {
  const book = booksDatabase.find(b => b.id === bookId);
  if (!book) return;
  state.selectedBook = book;

  // Sync basic textual detail properties
  document.getElementById('detail-cover').src = book.cover;
  document.getElementById('detail-title').textContent = book.title;
  document.getElementById('detail-author').textContent = `Written by ${book.author}`;
  document.getElementById('detail-rating-val').textContent = book.rating.toFixed(1);
  document.getElementById('detail-chapters-count').textContent = `${book.chaptersCount} Chapters`;
  document.getElementById('detail-format-tag').textContent = (book.type === 'novel') ? 'Web Novel' : 'E-Book';
  document.getElementById('detail-synopsis-text').textContent = book.description;
  
  // Render tag components
  const tagContainer = document.getElementById('detail-genre-tags');
  if (tagContainer) {
    tagContainer.innerHTML = book.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  }

  // Pick up similar stories (matching categories, excluding itself)
  const similarBooks = booksDatabase
    .filter(b => b.category === book.category && b.id !== book.id)
    .slice(0, 3);
    
  const similarGrid = document.getElementById('similar-books-grid');
  if (similarGrid) {
    if (similarBooks.length > 0) {
      similarGrid.innerHTML = similarBooks.map(createBookCardHTML).join('');
    } else {
      similarGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 1rem 0;">No similar stories found.</p>`;
    }
  }

  renderReviewsList();
  navigateTo('details-view');
}

/**
 * Render reviews and rating stars in the details view feedback panel
 */
function renderReviewsList() {
  const reviewsContainer = document.getElementById('reviews-list-container');
  if (!reviewsContainer || !state.selectedBook) return;

  const reviewsList = state.selectedBook.reviews;
  
  if (reviewsList.length > 0) {
    reviewsContainer.innerHTML = reviewsList.map(review => {
      const solidStars = '★'.repeat(review.rating);
      const emptyStars = '☆'.repeat(5 - review.rating);
      return `
        <div class="review-item">
          <div class="review-header">
            <span class="review-user-name">${review.name}</span>
            <span class="review-stars">${solidStars}${emptyStars}</span>
          </div>
          <div class="review-body">${review.text}</div>
        </div>
      `;
    }).join('');
  } else {
    reviewsContainer.innerHTML = `<p style="color: var(--text-secondary); text-align: center; padding: 2rem 0;">No reviews yet.</p>`;
  }
}

/**
 * Open E-reader pane and configure layouts.
 */
function startReading(book) {
  state.selectedBook = book;
  
  const titleText = document.getElementById('reader-book-title-text');
  const chapterText = document.getElementById('reader-chapter-title-text');
  const contentArea = document.getElementById('reader-content-area');

  if (titleText) titleText.textContent = book.title;
  if (chapterText) chapterText.textContent = '';
  
  if (contentArea) {
    contentArea.innerHTML = `
      <div style="text-align: center; padding: 6rem 1rem; color: var(--text-secondary); font-size: 1.5rem; font-weight: 500; font-family: var(--font-sans);">
        (details will be added soon)
      </div>
    `;
  }

  // Adjust pagination buttons and progress display
  const readingNav = document.querySelector('.reading-navigation');
  if (readingNav) readingNav.style.display = 'none';

  const progressBar = document.getElementById('reader-progress');
  if (progressBar) progressBar.style.width = '100%';
  
  navigateTo('reader-view');
}

/**
 * Scale the font size inside the E-reader content wrapper.
 */
function adjustFontSize(delta) {
  const newSize = state.readerFontSize + delta;
  
  // Keep size within readable boundaries
  const isTooSmall = (newSize < 0.85);
  const isTooBig = (newSize > 1.85);
  
  if (!isTooSmall && !isTooBig) {
    state.readerFontSize = newSize;
    const textWrapper = document.querySelector('.reading-text');
    if (textWrapper) {
      textWrapper.style.fontSize = `${newSize}rem`;
    }
  }
}

/**
 * Toggle themes inside the reading layout view container.
 */
function applyReaderTheme(theme) {
  state.readerTheme = theme;
  
  // Clean active theme flags
  document.body.classList.remove('theme-sepia', 'theme-dark');
  
  // Highlight chosen controls option button
  document.querySelectorAll('.theme-option').forEach(el => {
    const isCurrent = (el.getAttribute('data-theme') === theme);
    el.classList.toggle('active', isCurrent);
  });
  
  // Apply sepia/dark settings via body classes
  if (theme !== 'light') {
    document.body.classList.add(`theme-${theme}`);
  }
}

/* ==========================================================================
   Modular Event Listeners Registration
   ========================================================================== */

/**
 * Handles core page navigation links and Hamburger mobile drawer.
 */
function setupNavigationEvents() {
  document.querySelectorAll('[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = link.getAttribute('data-view');
      
      if (viewId === 'catalog-view') {
        const targetType = link.getAttribute('data-type') || 'All';
        
        state.selectedCategoryFilter = 'All';
        state.selectedTypeFilter = targetType;
        state.searchQuery = '';
        
        const searchInput = document.querySelector('.search-input');
        if (searchInput) searchInput.value = '';
        
        // Match sidebar filter button highlighting
        document.querySelectorAll('.filter-btn').forEach(btn => {
          const val = btn.getAttribute('data-value');
          const isCategory = btn.classList.contains('category-filter-btn');
          
          if (isCategory) {
            btn.classList.toggle('active', val === 'All');
          } else {
            btn.classList.toggle('active', val === targetType);
          }
        });
        
        renderCatalog();
      }
      
      navigateTo(viewId);
    });
  });

  document.getElementById('btn-mobile-toggle')?.addEventListener('click', () => {
    const mobileNav = document.getElementById('mobile-navigation');
    if (mobileNav) mobileNav.classList.toggle('open');
  });

  document.getElementById('header-logo')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('home-view');
  });
}

/**
 * Handle Search Overlays and sidebar catalog filter layouts.
 */
function setupSearchAndFilters() {
  const searchInput = document.querySelector('.search-input');
  const searchContainer = document.querySelector('.search-container');

  // Toggle Search bar drawer
  document.getElementById('btn-search-trigger')?.addEventListener('click', () => {
    if (searchContainer) {
      searchContainer.classList.toggle('active');
      const isOpen = searchContainer.classList.contains('active');
      if (isOpen && searchInput) {
        searchInput.focus();
      }
    }
  });

  // Filter list real-time on query input
  searchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderCatalog();
    if (state.activeView !== 'catalog-view') {
      navigateTo('catalog-view');
    }
  });

  // Sidebar buttons filtering triggers
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isCategoryFilter = btn.classList.contains('category-filter-btn');
      const filterVal = btn.getAttribute('data-value');
      
      if (isCategoryFilter) {
        state.selectedCategoryFilter = filterVal;
        document.querySelectorAll('.category-filter-btn').forEach(b => {
          b.classList.toggle('active', b === btn);
        });
      } else {
        state.selectedTypeFilter = filterVal;
        document.querySelectorAll('.type-filter-btn').forEach(b => {
          b.classList.toggle('active', b === btn);
        });
      }
      
      renderCatalog();
    });
  });
}

/**
 * Configures details selections, category tiles, and reading page triggers.
 */
function setupBookSelectionEvents() {
  // Hero CTAs
  document.getElementById('hero-cta-primary')?.addEventListener('click', () => {
    state.selectedCategoryFilter = 'All';
    state.selectedTypeFilter = 'All';
    state.searchQuery = '';
    renderCatalog();
    navigateTo('catalog-view');
  });

  document.getElementById('hero-cta-secondary')?.addEventListener('click', () => {
    if (booksDatabase.length > 0) {
      startReading(booksDatabase[0]);
    }
  });

  // Home page category card widgets
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      state.selectedCategoryFilter = cat;
      state.selectedTypeFilter = 'All';
      state.searchQuery = '';
      
      // Sync sidebar styles
      document.querySelectorAll('.category-filter-btn').forEach(btn => {
        const val = btn.getAttribute('data-value');
        btn.classList.toggle('active', val === cat);
      });
      document.querySelectorAll('.type-filter-btn').forEach(btn => {
        const val = btn.getAttribute('data-value');
        btn.classList.toggle('active', val === 'All');
      });
      
      renderCatalog();
      navigateTo('catalog-view');
    });
  });

  // Delegation of card grid click selectors
  document.addEventListener('click', (e) => {
    const cardElement = e.target.closest('.book-card, .novel-card');
    if (cardElement) {
      const isReadBtn = e.target.classList.contains('btn-read-card');
      const isNovelCard = cardElement.classList.contains('novel-card');
      
      if (isReadBtn || isNovelCard) {
        const bookId = cardElement.getAttribute('data-id');
        showBookDetails(bookId);
      }
    }
  });

  // Detail view 'Read Now' button
  document.getElementById('btn-read-now')?.addEventListener('click', () => {
    if (state.selectedBook) {
      startReading(state.selectedBook);
    }
  });
}

/**
 * Form handlers for leaving review comments on book details page.
 */
function setupReviewFormEvents() {
  const starButtons = document.querySelectorAll('.rating-star-btn');
  let selectedRating = 5;

  // Stars mouse-click visuals mapping
  starButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      selectedRating = idx + 1;
      starButtons.forEach((star, i) => {
        const isActive = (i <= idx);
        star.classList.toggle('active', isActive);
        star.textContent = isActive ? '★' : '☆';
      });
    });
  });

  // Handle comment submit
  document.getElementById('comment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('review-username');
    const textInput = document.getElementById('review-text');
    
    const clientName = nameInput.value.trim();
    const commentBody = textInput.value.trim();

    if (!clientName || !commentBody) return;

    if (state.selectedBook) {
      // Add review data to state array
      state.selectedBook.reviews.unshift({
        name: clientName,
        rating: selectedRating,
        text: commentBody
      });
      
      renderReviewsList();
      
      // Reset form variables
      nameInput.value = '';
      textInput.value = '';
      selectedRating = 5;
      
      starButtons.forEach(btn => {
        btn.classList.add('active');
        btn.textContent = '★';
      });
    }
  });
}

/**
 * Handle dynamic changes inside the e-reader controls toolbar.
 */
function setupReaderControlsEvents() {
  document.getElementById('reader-btn-font-dec')?.addEventListener('click', () => {
    adjustFontSize(-0.1);
  });

  document.getElementById('reader-btn-font-inc')?.addEventListener('click', () => {
    adjustFontSize(0.1);
  });

  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTheme = btn.getAttribute('data-theme');
      applyReaderTheme(selectedTheme);
    });
  });

  document.getElementById('reader-btn-close')?.addEventListener('click', () => {
    if (state.selectedBook) {
      showBookDetails(state.selectedBook.id);
    } else {
      navigateTo('home-view');
    }
  });
}

/**
 * Handle Theme switching (Light vs global Slate dark mode).
 */
function setupThemeEvents() {
  document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    const toggleBtn = document.getElementById('btn-theme-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = isDark ? '☀️' : '🌙';
    }
    
    // Sync active reader theme defaults
    state.readerTheme = isDark ? 'dark' : 'light';
    applyReaderTheme(state.readerTheme);
  });
}

/**
 * Modal display triggers and forms tab switches (Sign In vs Register)
 */
function setupAuthModalEvents() {
  const modalOverlay = document.getElementById('auth-modal');
  if (!modalOverlay) return;

  // Open overlay modal
  document.querySelectorAll('.auth-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
    });
  });

  // Close modal button
  modalOverlay.querySelector('.modal-close')?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  // Backdrop backdrop-click dismiss trigger
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  // Tab toggler views
  const modalTabs = modalOverlay.querySelectorAll('.modal-tab');
  const formsViews = modalOverlay.querySelectorAll('.modal-form-view');

  modalTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      modalTabs.forEach(t => t.classList.remove('active'));
      formsViews.forEach(f => f.classList.remove('active'));
      
      tab.classList.add('active');
      if (formsViews[index]) {
        formsViews[index].classList.add('active');
      }
    });
  });

  // Mock submit notifications
  modalOverlay.querySelectorAll('.btn-auth-submit').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Welcome back! You have successfully signed in.');
      modalOverlay.classList.remove('active');
    });
  });
}

/**
 * Book creation form layout validations and cover resolution.
 */
function setupAddBookFormEvents() {
  const addBookForm = document.getElementById('add-book-form');
  if (!addBookForm) return;

  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const titleVal = document.getElementById('add-title').value.trim();
    const authorVal = document.getElementById('add-author').value.trim();
    const categoryVal = document.getElementById('add-category').value;
    const typeVal = document.getElementById('add-type').value;
    const ratingVal = parseFloat(document.getElementById('add-rating').value);
    const chaptersVal = parseInt(document.getElementById('add-chapters').value);
    const tagsVal = document.getElementById('add-tags').value;
    const shortDescVal = document.getElementById('add-short-desc').value.trim();
    const descVal = document.getElementById('add-description').value.trim();

    // Split comma strings
    const cleanedTags = tagsVal
      .split(',')
      .map(tag => tag.trim())
      .filter(Boolean);

    // Map cover files using category settings
    let coverFile = '/fantasy_cover_2.png';
    if (categoryVal === 'Romance') {
      coverFile = '/romance_cover_2.png';
    } else if (categoryVal === 'Sci-Fi') {
      coverFile = '/scifi_cover.png';
    } else if (categoryVal === 'Mystery') {
      coverFile = '/mystery_cover.png';
    } else if (categoryVal === 'Thriller') {
      coverFile = '/thriller_cover.png';
    } else if (categoryVal === 'Education') {
      coverFile = '/education_cover.png';
    } else if (categoryVal === 'Fantasy' && booksDatabase.length % 2 === 0) {
      coverFile = '/fantasy_cover.png';
    }

    // Prepare container object details
    const newBookObject = {
      id: String(booksDatabase.length + 1),
      title: titleVal,
      author: authorVal,
      rating: ratingVal,
      chaptersCount: chaptersVal,
      category: categoryVal,
      type: typeVal,
      cover: coverFile,
      shortDesc: shortDescVal,
      description: descVal,
      tags: cleanedTags,
      reviews: []
    };

    booksDatabase.push(newBookObject);
    
    // Refresh interfaces list elements
    renderHome();
    renderCatalog();
    addBookForm.reset();
    
    alert(`"${titleVal}" has been successfully published!`);
    showBookDetails(newBookObject.id);
  });
}

/**
 * Combined Global Event Hub Registry
 */
function setupEventListeners() {
  setupNavigationEvents();
  setupThemeEvents();
  setupSearchAndFilters();
  setupBookSelectionEvents();
  setupReviewFormEvents();
  setupReaderControlsEvents();
  setupAuthModalEvents();
  setupAddBookFormEvents();
}

// Global Document Initializer
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  setupEventListeners();
  navigateTo('home-view');
});
