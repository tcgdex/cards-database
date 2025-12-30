import { PokemonSpecies } from '../interfaces'

const species: PokemonSpecies = {
	dexId: 6,
	englishName: "Charizard",
	names: {
		en: "Charizard",
		fr: "Dracaufeu",
		es: "Charizard",
		"es-mx": "Mega-Charizard X ex",
		it: "Charizard",
		pt: "Charizard",
		"pt-br": "Charizard",
		de: "Glurak",
		ja: "リザードン",
		ko: "리자몽",
		"zh-tw": "噴火龍",
		th: "เรเดียนต์ลิซาร์ดอน",
		"zh-cn": "喷火龙"
	},
	forms: ["charizard", "charizard-mega-x", "charizard-mega-y", "charizard-gmax"],
	image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/006.png",
	evolvesFrom: 5,
	evolvesTo: []
}

export default species
