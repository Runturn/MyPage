---
layout: page
title: Notes
kicker: LEARNING IN PUBLIC
subtitle: Short reflections from the road — less a diary, more a record of ideas taking shape.
share-description: Notes by HE Runtong on learning, building, and cyber security.
---

<section class="sunlit-notes-intro">
  <p>Notes are where unfinished thoughts can become clearer. They are intentionally occasional: each one should leave behind something worth returning to.</p>
  <a class="sunlit-text-link" href="{{ '/tags' | relative_url }}">Browse by topic <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
</section>

<section class="sunlit-notes-index" id="all-notes" aria-label="All notes">
  {% for post in site.posts %}
    <article class="sunlit-note-card">
      <a class="sunlit-note-card-image" href="{{ post.url | relative_url }}" aria-label="Read {{ post.title }}">
        <img src="{{ post.thumbnail-img | default: post.cover-img | default: '/assets/img/path.jpg' | relative_url }}" alt="">
      </a>
      <div>
        <p class="sunlit-eyebrow"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%B %-d, %Y' }}</time>{% if post.tags.size > 0 %} · {{ post.tags | join: ' · ' }}{% endif %}</p>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | strip_html | normalize_whitespace | truncate: 210 }}</p>
        <a class="sunlit-text-link" href="{{ post.url | relative_url }}">Read note <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
      </div>
    </article>
  {% else %}
    <p>No notes have been published yet.</p>
  {% endfor %}
</section>
