---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "ggdag"
summary: "An R Package for visualizing and analyzing causal directed acyclic graphs"
authors: []
tags: [rpackage, ggdag]
categories: [r]
date: 2019-10-09T08:00:20-07:00

# Optional external URL for project (replaces project detail page).
external_link: "https://ggdag.malco.io"

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
  url: https://github.com/malcolmbarrett/ggdag
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

ggdag links the dagitty package, which contains powerful algorithms for analyzing causal DAGs, with the unlimited flexibility of ggplot2. ggdag coverts dagitty objects to a tidy DAG data structure, which allows you to both analyze your DAG and plot it easily in ggplot2.