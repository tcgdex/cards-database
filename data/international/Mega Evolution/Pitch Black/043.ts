import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'es-es': "Primeape",
		'es-mx': "Primeape",
		'de-de': "Rasaff",
		'it-it': "Primeape",
		'pt-br': "Primeape"
	},

	illustrator: "GOSSAN",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Mankey"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Corkscrew Punch",
			'fr-fr': "Poing Tire-Bouchon",
			'es-es': "Puño Tirabuzón",
			'es-mx': "Puño Sacacorchos",
			'de-de': "Korkenzieherhieb",
			'it-it': "Pugno Rotante",
			'pt-br': "Soco Saca-rolha"
		},

		cost: ["Colorless", "Colorless"],

		damage: 50
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895829,
				tcgplayer: 704800
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895829,
				tcgplayer: 704800
			}
		},
	],
}

export default card
