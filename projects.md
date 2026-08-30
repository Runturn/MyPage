---
layout: page
title: Projects
kicker: RESEARCH AND BUILT WORK
subtitle: Work that turns questions into evidence, and ideas into something people can try.
cover-img: /assets/img/runtong-jphacks-2024.jpg
cover-alt: Runtong presenting QuickScribe at JPHACKS 2024
share-description: Publications and selected projects by HE Runtong.
---

<nav class="sunlit-section-nav" aria-label="Project categories">
  <a href="#publications"><span>01</span>Publications</a>
  <a href="#built-work"><span>02</span>Built work</a>
  <a href="#foundations"><span>03</span>Foundations</a>
</nav>

<section class="sunlit-project-section" id="publications">
  <header class="sunlit-section-heading">
    <span>01</span>
    <div><p>PUBLICATIONS</p><h2>Security under real constraints</h2></div>
  </header>

  <article class="sunlit-publication-card sunlit-publication-featured">
    <figure>
      <img src="{{ '/assets/img/paper-vibe-coding.png' | relative_url }}" alt="First page of the Vibe Coding security paper">
    </figure>
    <div>
      <p class="sunlit-eyebrow">ISPEC 2025 · PUBLISHED</p>
      <h3>Assessing the Security of Vibe Coding: Baseline vs. Security-Oriented Prompts in LLM Code Generation</h3>
      <p class="sunlit-authors"><strong>Runtong He</strong>, Huishan Lai, Jingxue Chen, Chunhua Su</p>
      <p>Ten Python tasks inspired by OWASP Top 10 and CWE categories test whether security-oriented prompting improves LLM-generated code. Bandit analysis and runtime probes show that prompting can reduce risk, but cannot replace verification.</p>
      <div class="sunlit-link-row">
        <a href="https://link.springer.com/chapter/10.1007/978-981-95-9284-5_27" target="_blank" rel="noopener noreferrer">Paper <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
        <a href="https://github.com/huiishan99/vibe-sec-experiment" target="_blank" rel="noopener noreferrer">Code <i class="fa-brands fa-github" aria-hidden="true"></i></a>
        <a href="https://web-publications.vercel.app/publications/assessing-security-vibe-coding/" target="_blank" rel="noopener noreferrer">Case study <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
      </div>
    </div>
  </article>

  <article class="sunlit-publication-card">
    <div class="sunlit-publication-mark" aria-hidden="true"><span>02</span><i class="fa-solid fa-network-wired"></i></div>
    <div>
      <p class="sunlit-eyebrow">ICICS 2026 · SHORT PAPER · PUBLICATION PENDING</p>
      <h3>Cost-Aware Confidence-Gated Two-Stage Network Intrusion Detection under a Cross-File Cross-Class Stress Test</h3>
      <p class="sunlit-authors">Jiaming Zhang, Huishan Lai, <strong>Runtong He</strong>, Jingxue Chen, Chunhua Su</p>
      <p>A two-stage NIDS pipeline sends ambiguous flows from an LSTM fast path to a lightweight verifier. LLMs are limited to structured audit rationales rather than primary classification decisions.</p>
      <p class="sunlit-status-note"><i class="fa-regular fa-clock" aria-hidden="true"></i> Public link will be added after formal publication.</p>
    </div>
  </article>
</section>

<section class="sunlit-project-section" id="built-work">
  <header class="sunlit-section-heading">
    <span>02</span>
    <div><p>BUILT WORK</p><h2>Make the idea testable</h2></div>
  </header>

  <article class="sunlit-built-card">
    <figure>
      <img src="{{ '/assets/img/runtong-jphacks-2024.jpg' | relative_url }}" alt="Runtong presenting QuickScribe at JPHACKS 2024">
      <figcaption>JPHACKS 2024 · Sendai</figcaption>
    </figure>
    <div>
      <p class="sunlit-eyebrow">AUDIENCE VOTE · 3RD PLACE</p>
      <h3>QuickScribe</h3>
      <p>A prototype that turns handwritten mathematical expressions into structured digital notation using Gemini 1.5 Flash and MathJax. I worked on backend development, frontend API integration, and the final presentation.</p>
      <a class="sunlit-text-link" href="https://github.com/jphacks/sd_2404" target="_blank" rel="noopener noreferrer">View repository <i class="fa-brands fa-github" aria-hidden="true"></i></a>
    </div>
  </article>
</section>

<section class="sunlit-project-section" id="foundations">
  <header class="sunlit-section-heading">
    <span>03</span>
    <div><p>FOUNDATIONS</p><h2>Earlier work still shapes the method</h2></div>
  </header>

  <div class="sunlit-profile-columns">
    <article class="sunlit-profile-block">
      <p class="sunlit-eyebrow">CIVIL ENGINEERING THESIS</p>
      <h3>Urban expressway construction planning</h3>
      <p>A 6.54-kilometre road-project plan connecting schedule, labour, materials, machinery, quality control, and safety into one delivery system.</p>
    </article>
    <article class="sunlit-profile-block">
      <p class="sunlit-eyebrow">TRANSFERABLE PRACTICE</p>
      <h3>Systems before silos</h3>
      <p>The tools changed from site plans to software and experiments, but the working habit remained: define the constraints, inspect interactions, and verify the result.</p>
    </article>
  </div>
</section>
