import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Staraptor",
		'fr-fr': "Étouraptor",
		'es-es': "Staraptor",
		'it-it': "Staraptor",
		'pt-br': "Staraptor",
		'de-de': "Staraptor"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		398,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strong Breeze",
				'fr-fr': "Forte Brise",
			},
			effect: {
				'en-us': "Your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck.",
				'fr-fr': "Votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck.",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It never stops attacking even if it is injured. It fusses over the shape of its comb.",
	},

	thirdParty: {
		cardmarket: 280975,
		tcgplayer: 89510
	}
}

export default card
