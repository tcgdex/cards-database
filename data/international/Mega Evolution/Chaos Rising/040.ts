import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	description: {
		'en-us': "It was recently discovered that the different varieties of Pumpkaboo vary not only in size but also in the size of the souls they collect.",
	},


	name: {
		'en-us': "Pumpkaboo",
		'fr-fr': "Pitrouille",
		'es-es': "Pumpkaboo",
		'es-mx': "Pumpkaboo",
		'de-de': "Irrbis",
		'it-it': "Pumpkaboo",
		'pt-br': "Pumpkaboo"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [710],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'es-mx': "Estampida",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro"
		},

		cost: ["Psychic"],
		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886432,
				tcgplayer: 693536
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886432,
				tcgplayer: 693536
			}
		},
	],
}

export default card
