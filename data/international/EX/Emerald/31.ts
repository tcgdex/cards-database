import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Cross-Cut",
				'fr-fr': "Coupe transversale",
				'de-de': "Cross-Cut"
			},
			effect: {
				'en-us': "If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shove",
				'fr-fr': "Bousculer",
				'de-de': "Shove"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 86012,
		cardmarket: 276542
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86012,
				cardmarket: 276542
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86012,
				cardmarket: 276542
			},
		}
	],
}

export default card
