import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Latios",
		'fr-fr': "Latios",
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 100,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Sky Blade",
				'fr-fr': "Lame Céleste",
			},
			effect: {
				'en-us': "If Latias is on your Bench, this attack does 20 more damage.",
				'fr-fr': "Si Latias est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Speed Wing",
				'fr-fr': "Ailes Vives",
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A highly intelligent Pokémon. By folding back its wings in flight, it can overtake jet planes.",
	},

	thirdParty: {
		cardmarket: 281010,
		tcgplayer: 86668
	}
}

export default card
