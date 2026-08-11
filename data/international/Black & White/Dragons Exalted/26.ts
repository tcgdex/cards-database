import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Cannon",
				'fr-fr': "Canon à O",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts multipliés par le nombre d'Énergies Water attachées à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Giant Wave",
				'fr-fr': "Vague Géante",
			},
			effect: {
				'en-us': "This Pokémon can't use Giant Wave during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Vague Géante pendant votre prochain tour.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The biggest of all Pokémon. It can dive to a depth of almost 10,000 feet on only one breath.",
	},

	thirdParty: {
		cardmarket: 280465,
		tcgplayer: 90462
	}
}

export default card
