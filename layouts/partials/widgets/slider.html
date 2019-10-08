{{ $ := .root }}
{{ $page := .page }}
{{ $hash_id := .hash_id }}
 
<!-- Indicators -->
<ol class="carousel-indicators">
  {{ range $index, $item := $page.Params.item }} 
  <li data-target="#{{$hash_id}}" data-slide-to="{{$index}}" {{if eq $index 0}}class="active"{{end}}></li>
  {{ end }}
</ol> 

<!-- Carousel slides wrapper --> 
<div class="carousel-inner">
  {{ range $index, $item := $page.Params.item }} 
  {{ $query := where site.RegularPages "Type" $item.pages_type }}
  {{$recent_item := index ($query) 0}} 
  {{ $i18n := "" }}
  {{ if eq $item.pages_type "post" }}
    {{ $i18n = "more_posts" }}
  {{ else if eq $item.pages_type "talk" }}
    {{ $i18n = "more_talks" }}
  {{ else if eq $item.pages_type "publication" }}
    {{ $i18n = "more_publications" }}
  {{ else }}
    {{ $i18n = "more_pages" }}
  {{ end }}
  <div class="wg-hero dark carousel-item{{if eq $index 0}} active{{end}}" style="position:relative;{{with $page.Params.height}}{{printf "height: %s;" . | safeCSS}}{{end}}
    {{ if $item.overlay_color }}
    background-color: {{ $item.overlay_color | default "transparent" }};
    {{ end }}
    {{ if $item.overlay_img }}
    background-image:
    {{ if $item.overlay_filter }}linear-gradient(rgba(0, 0, 0, {{ $item.overlay_filter }}), rgba(0, 0, 0, {{ $item.overlay_filter }})), {{ end }}
    url('{{ printf "img/%s" $item.overlay_img | absURL }}');
    {{ end }} 
    ;">
       
    <div class="container container-slider">
        <h1 class="hero-title">
        {{ with $item.title }}{{ . | markdownify | emojify }}{{ end }}
        </h1>
        {{ if $item.use_pages }}
        <div class="row">
          <div class="col-12 col-lg-4 section-heading section-heading-slider hide-element">
            <h1>{{ with $item.pages_title }}{{ . | markdownify | emojify }}{{ end }}</h1>
            {{ with $item.pages_subtitle }}<p>{{ . | markdownify | emojify }}</p>{{ end }}
          </div>
          <div class="col-12 col-lg-8">
            {{ partial "slider_li" $recent_item }}  
            <div class="see-all see-all-slider">
              <a href="{{ $item.pages_type }}">  
                {{ i18n $i18n | default "See all" }}
                <i class="fas fa-angle-right"></i>
              </a>
            </div>
        
          </div>
        </div>
        {{ end }} 
          {{ with $item.content }}
        <p class="slider-content hero-lead" style="margin: 0 auto 0 auto">
          {{ . | markdownify | emojify }}
        </p>
          {{ end }}
        {{ if $item.cta_url }}
        {{ $pack := or .cta_icon_pack "fas" }}
        {{ $pack_prefix := $pack }}
        {{ if in (slice "fab" "fas" "far" "fal") $pack }}
          {{ $pack_prefix = "fa" }}
        {{ end }}
        <p style = "text-align: center">
          <a href="{{ $item.cta_url }}" class="btn btn-light btn-lg btn-slider">
            {{- with $item.cta_icon -}}<i class="{{ $pack }} {{ $pack_prefix }}-{{ . }}" style="padding-right: 10px;"></i>{{- end -}}
            {{- $item.cta_label | emojify | safeHTML -}}
          </a>
        </p>
        {{ end }}
      </div>
  </div>
  {{ end }}
</div>

<!-- Left and right controls -->
<a class="carousel-control-prev hide-element" href="#{{$hash_id}}" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next hide-element" href="#{{$hash_id}}" data-slide="next">
  <span class="carousel-control-next-icon"></span>
  <span class="sr-only">Next</span>
</a>
