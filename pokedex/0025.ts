import { PokemonSpecies } from '../interfaces'

const species: PokemonSpecies = {
	dexId: 25,
	englishName: "Pikachu",
	names: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		"pt-br": "Pikachu",
		de: "Pikachu",
		ja: "ピカチュウ",
		ko: "피카츄",
		"zh-tw": "皮卡丘",
		id: "Pikachu",
		th: "พิคาชู",
		"zh-cn": "皮卡丘"
	},
	forms: ["pikachu", "pikachu-rock-star", "pikachu-belle", "pikachu-pop-star", "pikachu-phd", "pikachu-libre", "pikachu-cosplay", "pikachu-original-cap", "pikachu-hoenn-cap", "pikachu-sinnoh-cap", "pikachu-unova-cap", "pikachu-kalos-cap", "pikachu-alola-cap", "pikachu-partner-cap", "pikachu-starter", "pikachu-world-cap", "pikachu-gmax"],
	image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png",
	evolvesFrom: 172,
	evolvesTo: [26]
}

export default species
