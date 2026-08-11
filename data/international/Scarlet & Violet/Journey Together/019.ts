import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [919],
	set: Set,

	name: {
		'en-us': "Nymble",
		'fr-fr': "Lilliterelle",
		'es-es': "Nymble",
		'de-de': "Micrick",
		'it-it': "Nymble",
		'pt-br': "Nymble",
		'es-mx': "Nymble"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Ayako Ozaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817171,
				tcgplayer: 623446
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817171,
				tcgplayer: 623446
			}
		},
	],
}

export default card
