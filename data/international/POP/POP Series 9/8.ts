import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Gabite",
		'fr-fr': "Gabite"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [444],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Gible",
		'fr-fr': "Griknot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Burrow",
				'fr-fr': "Terrier"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Gabite by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Carmache par des attaques lors du prochain tour de votre adversaire."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Distored Wave",
				'fr-fr': "Vague tordue"
			},
			effect: {
				'en-us': "Before doing damage, remove 2 damage counters from the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, retirez au Pokémon Défenseur 2 marqueurs de dégât."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It habitually digs up and hoards gems in its nest. Its loot is constantly targeted by thieves."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85598,
				cardmarket: 278559
			},
		},
	],

}

export default card
