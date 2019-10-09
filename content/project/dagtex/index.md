---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "dagtex"
summary: "A lightly opinionated R Package for making LaTeX DAGs"
authors: []
tags: [rpackage, ggdag, dagtex]
categories: [r]
date: 2019-10-09T08:00:20-07:00

# Optional external URL for project (replaces project detail page).
external_link: "https://github.com/malcolmbarrett/dagtex"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "Center"
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: GitHub
  url: https://github.com/malcolmbarrett/dagtex
  icon_pack: fab
  icon: github

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

daxtex is a low-ish level package for making LaTeX DAGs in R. While dagtex will work as a standalone package, the longterm goal is to serve as a LaTeX backend for [ggdag](https://ggdag.malco.io/) objects.