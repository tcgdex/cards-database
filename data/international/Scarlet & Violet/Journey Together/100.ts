import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [920],
	set: Set,

	name: {
		'en-us': "Lokix",
		'fr-fr': "Gambex",
		'es-es': "Lokix",
		'de-de': "Lextremo",
		'it-it': "Lokix",
		'pt-br': "Lokix",
		'es-mx': "Lokix"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'de-de': "Micrick",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'es-mx': "Nymble"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Low Sweep",
			'fr-fr': "Balayette",
			'es-es': "Puntapié",
			'de-de': "Fußtritt",
			'it-it': "Calciobasso",
			'pt-br': "Movimento Baixo",
			'es-mx': "Barredora"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "AKIRA EGAWA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817252,
				tcgplayer: 623527
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817252,
				tcgplayer: 623527
			}
		},
	],
}

export default card
