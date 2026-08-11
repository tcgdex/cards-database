import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [532],
	set: Set,

	name: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'de-de': "Praktibalk",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'es-es': "Timburr",
		'es-mx': "Timburr"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'es-es': "Patada Baja",
			'es-mx': "Patada Baja"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Strength",
			'fr-fr': "Force",
			'de-de': "Stärke",
			'it-it': "Forza",
			'pt-br': "Força",
			'es-es': "Fuerza",
			'es-mx': "Fuerza"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836167,
				tcgplayer: 642580
			}
		},
	]
}

export default card
