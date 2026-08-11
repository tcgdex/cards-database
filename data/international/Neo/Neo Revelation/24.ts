import { Card } from 'models/database/card'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'de-de': "Sniebel"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Swipe",
				'fr-fr': "Griffe",
				'de-de': "Swipe"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard all Trainer cards attached to your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez toutes les cartes Dresseur attachées au Pokémon de votre adversaire.",
				'de-de': "Flip a coin. If heads, discard all Trainer cards attached to your opponent´s Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-attaque",
				'de-de': "Quick Attack"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage."
			},
			damage: "10+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		'en-us': "Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.",
		'fr-fr': "Ses pattes cachent des griffes aiguisées. S'il est attaqué, il sort ses griffes et surprend son ennemi."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274610,
				tcgplayer: 89366
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274610,
				tcgplayer: 89366
			}
		}
	]
}

export default card

