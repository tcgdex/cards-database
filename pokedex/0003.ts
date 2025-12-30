import { PokemonSpecies } from '../interfaces'

const species: PokemonSpecies = {
	dexId: 3,
	englishName: "Venusaur",
	names: {
		en: "Venusaur",
		fr: "Florizarre",
		es: "Venusaur",
		"es-mx": "Mega Venusaur ex",
		it: "Venusaur",
		pt: "Venusaur",
		"pt-br": "Venusaur",
		de: "Bisaflor",
		ja: "フシギバナ",
		ko: "이상해꽃",
		"zh-tw": "妙蛙花",
		"zh-cn": "妙蛙花"
	},
	forms: ["venusaur", "venusaur-mega", "venusaur-gmax"],
	image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/003.png",
	evolvesFrom: 2,
	evolvesTo: []
}

export default species
