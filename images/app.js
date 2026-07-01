function singerUrl(singer) {
  return `singer.html?id=${encodeURIComponent(singer.id)}`;
}

function tags(items) {
  return items.map((item) => `<span class="tag">${item}</span>`).join("");
}

function renderFeatured() {
  const container = document.querySelector("#featured-grid");
  if (!container) return;

  const featuredIds = ["chen-qi-zhen", "chen-shan-ni", "an-pu"];
  const featured = featuredIds.map((id) => singers.find((singer) => singer.id === id));

  container.innerHTML = featured.map((singer, index) => `
    <article class="feature-card">
      <a href="${singerUrl(singer)}" aria-label="查看 ${singer.name} 的档案">
        <div class="portrait portrait-${index + 1}">
          <img src="${singer.image}" alt="${singer.name}的照片">
          <span>${singer.number}</span>
        </div>
        <p class="card-meta">${singer.genres.join(" · ")}</p>
        <h3>${singer.name}</h3>
        <p>${singer.alias}</p>
      </a>
    </article>
  `).join("");

  const count = document.querySelector("#archive-count");
  if (count) count.textContent = singers.length;
}

function renderAlbums() {
  const container = document.querySelector("#albums-grid");
  if (!container) return;

  container.innerHTML = essentialAlbums.map((album, index) => `
    <article class="album-card">
      <div class="album-cover ${album.cover ? "album-cover-image" : `cover-${index + 1}`}">
        ${album.cover
          ? `<img src="${album.cover}" alt="${album.title}专辑封面" onerror="this.parentElement.className='album-cover cover-${index + 1}'; this.parentElement.innerHTML='<span>${String(index + 1).padStart(2, "0")}</span><strong>${album.title.slice(0, 1)}</strong>';">`
          : `<span>${String(index + 1).padStart(2, "0")}</span><strong>${album.title.slice(0, 1)}</strong>`
        }
      </div>
      <div class="album-meta">
        <p>${album.artist} · ${album.year}</p>
        <h3>${album.title}</h3>
        <p>${album.note}</p>
      </div>
    </article>
  `).join("");
}

function renderReadingRoom() {
  const container = document.querySelector("#reading-list");
  if (!container) return;

  container.innerHTML = readingRoom.map((article, index) => `
    <article class="reading-item">
      <span class="reading-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="reading-title">
        <p class="eyebrow">${article.singer} / ${article.type}</p>
        <h3><a href="${article.url}" target="_blank" rel="noreferrer">${article.title}</a></h3>
      </div>
      <p class="reading-summary">${article.summary}</p>
      <div class="reading-byline">
        <span>${article.site}</span>
        <a href="${article.url}" target="_blank" rel="noreferrer">阅读原文 →</a>
      </div>
    </article>
  `).join("");
}

function renderTimeline() {
  const container = document.querySelector("#music-timeline");
  if (!container) return;

  container.innerHTML = musicTimeline.map((item, index) => `
    <article class="timeline-item timeline-item-${index + 1}">
      <div class="timeline-copy">
        <p class="timeline-decade">${item.decade}</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <figure class="timeline-visual ${item.image ? "" : "timeline-placeholder"}">
        ${item.image
          ? `<img src="${item.image}" alt="${item.caption}" onerror="this.insertAdjacentHTML('beforebegin', '<div class=&quot;timeline-art&quot;><span>${item.decade}</span><strong>${item.title.slice(0, 1)}</strong></div>'); this.parentElement.classList.add('timeline-placeholder'); this.remove();">`
          : `<div class="timeline-art"><span>${item.decade}</span><strong>${item.title.slice(0, 1)}</strong></div>`
        }
        <figcaption>${item.caption}</figcaption>
      </figure>
    </article>
  `).join("");
}

function renderSingerList(list = singers) {
  const container = document.querySelector("#singer-list");
  if (!container) return;

  container.innerHTML = list.map((singer) => `
    <article class="singer-row">
      <span class="row-number">${singer.number}</span>
      <div class="row-name">
        <a href="${singerUrl(singer)}">${singer.name}</a>
        <span>${singer.alias}</span>
      </div>
      <div class="row-tags">${tags(singer.genres)}</div>
      <span class="row-years">${singer.activeYears}</span>
      <a class="row-arrow" href="${singerUrl(singer)}" aria-label="查看 ${singer.name}">↗</a>
    </article>
  `).join("");

  const count = document.querySelector("#result-count");
  if (count) count.textContent = `${list.length} 位创作者`;
}

function setupSearch() {
  const input = document.querySelector("#search-input");
  if (!input) return;

  renderSingerList();
  input.addEventListener("input", () => {
    const keyword = input.value.trim().toLowerCase();
    const filtered = singers.filter((singer) => {
      const searchable = [
        singer.name,
        singer.realName,
        singer.alias,
        ...singer.genres,
        ...singer.roles
      ].join(" ").toLowerCase();
      return searchable.includes(keyword);
    });
    renderSingerList(filtered);
  });
}

function handleDetailImageError(image) {
  const fallback = image.dataset.fallback;
  if (fallback && !image.dataset.usedFallback) {
    image.dataset.usedFallback = "true";
    image.src = fallback;
    return;
  }

  image.parentElement.outerHTML = `<div class="detail-mark" aria-hidden="true">${image.dataset.initial}</div>`;
}

function renderDetailVisual(singer) {
  const placeholder = `<div class="detail-mark" aria-hidden="true">${singer.name.slice(0, 1)}</div>`;
  const image = singer.albumImage || singer.image;
  if (!image) return placeholder;

  const fallback = singer.albumImage && singer.image ? singer.image : "";
  const alt = singer.albumImage ? `${singer.name}的专辑图片` : `${singer.name}的照片`;

  return `
    <figure class="detail-photo">
      <img
        src="${image}"
        alt="${alt}"
        data-fallback="${fallback}"
        data-initial="${singer.name.slice(0, 1)}"
        onerror="handleDetailImageError(this)"
      >
    </figure>
  `;
}

function renderDetail() {
  const container = document.querySelector("#singer-detail");
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const singer = singers.find((item) => item.id === id) || singers[0];
  document.title = `${singer.name}｜华语女性创作歌手档案馆`;

  container.innerHTML = `
    <section class="detail-hero">
      <div>
        <p class="eyebrow">${singer.number} · ${singer.activeYears}</p>
        <h1>${singer.name}</h1>
        <p class="detail-alias">${singer.alias}</p>
      </div>
      ${renderDetailVisual(singer)}
    </section>

    <section class="detail-grid">
      <article class="detail-story">
        <p class="eyebrow">Profile</p>
        <p class="lead">${singer.bio}</p>
        <p>${singer.relation}</p>
        <blockquote>${singer.milestone}</blockquote>
      </article>

      <aside class="fact-sheet">
        <div>
          <span>本名</span>
          <strong>${singer.realName}</strong>
        </div>
        <div>
          <span>创作身份</span>
          <strong>${singer.roles.join(" / ")}</strong>
        </div>
        <div>
          <span>音乐风格</span>
          <strong>${singer.genres.join(" / ")}</strong>
        </div>
        <div>
          <span>活跃年代</span>
          <strong>${singer.activeYears}</strong>
        </div>
      </aside>
    </section>

    <section class="works-section">
      <div>
        <p class="eyebrow">Selected songs</p>
        <h2>代表作品</h2>
        <ol>${singer.songs.map((song) => `<li>${song}</li>`).join("")}</ol>
      </div>
      <div>
        <p class="eyebrow">Selected albums</p>
        <h2>代表专辑</h2>
        <ol>${singer.albums.map((album) => `<li>${album}</li>`).join("")}</ol>
      </div>
    </section>

    <section class="source-section">
      <p>继续阅读与资料核对</p>
      <a class="text-link" href="${singer.source}" target="_blank" rel="noreferrer">查看外部资料来源 →</a>
    </section>
  `;
}

renderFeatured();
renderAlbums();
renderReadingRoom();
renderTimeline();
setupSearch();
renderDetail();
