import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [297],

	hp: 90,

	types: [
		"Fighting"
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
			],
			name: {
				'en-us': "Super Slap Push",
				'fr-fr': "Super gifle",
				'de-de': "Super Slap Push"
			},
			effect: {
				'en-us': "Does 20 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 20 dégâts à chaque Pokémon Défenseur.",
				'de-de': "Does 20 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Throw",
				'fr-fr': "Mega lancer",
				'de-de': "Mega Throw"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Pokémon-ex, this attack does 40 damage plus 40 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque lui inflige 80 dégâts.",
				'de-de': "If the Defending Pokémon is a Pokémon-ex, this attack does 40 damage plus 40 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275656,
				tcgplayer: 86010
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275656,
				tcgplayer: 86010
			}
		},
	],

}

export default card
