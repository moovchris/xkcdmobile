$("/html/head") {
	inject("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\">")
}

$("/html/body"){
	add_class("mw_home")
	move_here("//div[@id='comic']","top")
	move_here("//ul[contains(@class,'comicNav')][1]","bottom")
	remove(".//a[contains(@href,'random')]")
	remove(".//div[@id='topContainer']")
	remove(".//div[@id='bottom']")
	remove(".//div[@id='middleContainer']")
}