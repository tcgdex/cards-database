import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Vanilluxe",
		'fr-fr': "Sorbouboul",
		'es-es': "Vanilluxe",
		'it-it': "Vanilluxe",
		'pt-br': "Vanilluxe",
		'de-de': "Gelatwino"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		584,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "ChillMAX",
				'fr-fr': "Gel Maximal",
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Cold Breath",
				'fr-fr': "Souffle Froid",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Swallowing large amounts of water, they make snow clouds inside their bodies and, when angry, cause violent blizzards.",
	},

	thirdParty: {
		cardmarket: 280907,
		tcgplayer: 90276
	}
}

export default card
