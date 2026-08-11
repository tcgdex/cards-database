import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'de-de': "Bisaknosp",
		'it-it': "Ivysaur",
		'es-es': "Ivysaur",
		'pt-br': "Ivysaur",
		'es-mx': "Ivysaur"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'de-de': "Bisasam",
		'it-it': "Bulbasaur",
		'es-es': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'es-mx': "Bulbasaur"
	},
	stage: "Stage1",
	dexId: [2],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Razor Leaf",
			'fr-fr': "Tranch'Herbe",
			'de-de': "Rasierblatt",
			'it-it': "Foglielama",
			'es-es': "Hoja Afilada",
			'pt-br': "Folha Navalha",
			'es-mx': "Hojas Navaja"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851205,
				tcgplayer: 654473
			}
		},
	],
}

export default card
