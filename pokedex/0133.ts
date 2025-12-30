import { PokemonSpecies } from '../interfaces'

const species: PokemonSpecies = {
	dexId: 133,
	englishName: "Eevee",
	names: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		"pt-br": "Eevee",
		de: "Evoli",
		ja: "イーブイ",
		ko: "이브이",
		"zh-tw": "伊布",
		id: "Eevee",
		th: "อีวุย",
		"zh-cn": "伊布"
	},
	forms: ["eevee", "eevee-starter", "eevee-gmax"],
	image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/133.png",
	evolvesFrom: null,
	evolvesTo: [134, 135, 136, 196, 197, 470, 471, 700]
}

export default species
