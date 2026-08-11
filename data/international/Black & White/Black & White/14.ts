import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Sawsbuck",
		'fr-fr': "Haydaim",
		'es-es': "Sawsbuck",
		'it-it': "Sawsbuck",
		'pt-br': "Sawsbuck",
		'de-de': "Kronjuwild"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Deerling",
		'fr-fr': "Vivaldaim",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nature Power",
				'fr-fr': "Force-Nature",
			},
			effect: {
				'en-us': "Does 10 more damage for each Grass Energy attached to both your and your opponent's Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque Énergie Grass attachée à vos Pokémon et à ceux de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Horn Leech",
				'fr-fr': "Encornebois",
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They migrate according to the seasons. People can tell the season by looking at Sawsbuck's horns.",
	},

	thirdParty: {
		cardmarket: 279752,
		tcgplayer: 88941
	}
}

export default card
