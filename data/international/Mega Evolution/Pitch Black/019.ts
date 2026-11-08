import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Brionne",
		'fr-fr': "Otarlette",
		'es-es': "Brionne",
		'es-mx': "Brionne",
		'de-de': "Marikeck",
		'it-it': "Brionne",
		'pt-br': "Brionne"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "Common",
	category: "Pokemon",
	dexId: [729],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Popplio"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'es-es': "Vozarrón",
			'es-mx': "Hipervoz",
			'de-de': "Schallwelle",
			'it-it': "Granvoce",
			'pt-br': "Hipervoz"
		},

		cost: ["Water"],

		damage: 40
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895807,
				tcgplayer: 704776
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895807,
				tcgplayer: 704776
			}
		},
	],
}

export default card
