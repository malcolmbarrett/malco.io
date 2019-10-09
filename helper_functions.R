new_talk <- function(x) {
  blogdown::hugo_cmd(paste0("new talk/", x))
  rstudioapi::navigateToFile(file.path("content", "talk", x, "index.md"))
}

feature <- function(x, path, ...) {
  device <- fs::path_ext(x)
  fs::file_move(x, paste0(path, "featured.", device), ...)
}
