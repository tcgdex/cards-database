import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [850],
	set: Set,

	name: {
		'en-us': "Sizzlipede",
		'fr-fr': "Grillepattes",
		'es-es': "Sizzlipede",
		'it-it': "Sizzlipede",
		'pt-br': "Sizzlipede",
		'de-de': "Thermopod"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "miki kudo",

	description: {
		'en-us': "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'es-es': "Roer",
			'pt-br': "Roída",
			'it-it': "Rosicchiamento"
		},

		damage: 10
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Ember",
			'fr-fr': "Flammèche",
			'de-de': "Glut",
			'es-es': "Ascuas",
			'pt-br': "Brasa",
			'it-it': "Braciere"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582180,
				tcgplayer: 253172
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582180,
				tcgplayer: 253172
			}
		},
	],
}

export default card
