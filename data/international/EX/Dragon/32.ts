import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Leviator",
		'de-de': "Garados"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [130],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Dragon Crush",
				'fr-fr': "Écras'dragon",
				'de-de': "Dragon Crush"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon. Discard an Energy card from each Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chaque Pokémon Défenseur. Défaussez une carte Énergie de chacun de ces Pokémon.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage to each Defending Pokémon. Discard an Energy from each Defending Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistence."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85990,
				cardmarket: 275909
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85990,
				cardmarket: 275909
			},
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 239090,
				cardmarket: 275909
			},
		},
	],

}

export default card
