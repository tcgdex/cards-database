import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Maschiff",
		'fr-fr': "Grondogue",
		'es-es': "Maschiff",
		'es-mx': "Maschiff",
		'de-de': "Mobtiff",
		'it-it': "Maschiff",
		'pt-br': "Maschiff"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'es-mx': "Mordida",
			'de-de': "Biss",
			'it-it': "Morso",
			'pt-br': "Mordida"
		},

		cost: ["Darkness", "Darkness"],

		damage: 40
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895842,
				tcgplayer: 704814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895842,
				tcgplayer: 704814
			}
		},
	],
}

export default card
