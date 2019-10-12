new_talk <- function(x) {
  blogdown::hugo_cmd(paste0("new talk/", x))
  rstudioapi::navigateToFile(file.path("content", "talk", x, "index.md"))
}

move_image <- function(x, path, img_name, ...) {
  device <- fs::path_ext(x)
  fs::file_move(x, paste0(path, img_name, ".", device), ...)
}

feature <- function(x, path, ...) {
  move_image(x, path, "featured", ...)
}


thumbnail <- function(x, path, ...) {
  move_image(x, path, "thumbnail", ...)
}

update_theme <- function() {
  system2("git", c("submodule", "update", "--recursive", "--remote"))
}
