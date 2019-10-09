---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "An introduction to precisely and ggdag: tools for modern methods in R"
slug: "2019-09-04-bemc"
event: Berlin Epidemiological Methods Colloquium 
event_url:
location: Berlin, Germany
address:
  street:
  city:
  region:
  postcode:
  country:
summary:
abstract: "Modern epidemiology gives us insight into study planning and causal inference, but the success of these approaches require friendly and accessible software. I will discuss two R packages for modern methods in study design and causal inference: precisely and ggdag. precisely is a study planning tool to calculate sample size based on precision rather than power. Calculating sample size based on precision focuses on the width of the confidence interval instead of statistical significance. precisely is a fast and flexible R implementation of the work by Rothman and Greenland on this subject, including a Shiny web app for calculating sample size. ggdag is a toolkit for working with causal directed acyclic graphs (DAGs), a central tool in causal inference. DAGs help identify many types of bias, like confounding, selection bias, and measurement error, as well as tell us how to correct for it. ggdag makes it easy to create, analyze, and plot DAGs in ggplot2. "

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: 2019-09-04T16:00:00
# date_end: 2019-10-07T16:20:41-07:00
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: 2019-10-07T16:20:41-07:00

authors: []
tags: [ggdag, precisely]

# Is this a featured talk? (true/false)
featured: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter
links:
- icon: images
  icon_pack: fas
  name: slides
  url: https://bemc.netlify.com

# Optional filename of your slides within your talk's folder or a URL.
url_slides:

url_code:
url_pdf:
url_video:

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: [ggdag, precisely]
---
