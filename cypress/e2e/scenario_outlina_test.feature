Feature:Baskentler

Scenario Outline: Baskentleri Arama
Given url git
Given kullanici arama yapacak "<world capitels>"
Given arama yapildigini kontrol edecek "<world capitels>"

Examples:
|world capitels|
|london |
|paris |
|madrid |
|vienna |