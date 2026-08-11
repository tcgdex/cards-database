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

	illustrator: "Shinya Mizuno",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 836003,
				tcgplayer: 642499
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836003,
				tcgplayer: 642499
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836371,
				tcgplayer: 642741
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836372,
				tcgplayer: 642668
			}
		}
	]
}

export default card
