import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Thundurus",
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		642,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge",
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Disaster Volt",
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.",
	},

	thirdParty: {
		cardmarket: 281201,
		tcgplayer: 89905
	}
}

export default card
