import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Starmie GX",
		'fr-fr': "Staross-GX",
	},

	illustrator: "PLANETA Otani",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 190,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Star Stream",
				'fr-fr': "Flot Stellaire",
			},
			effect: {
				'en-us': "Attach 2 Water Energy cards from your discard pile to 1 of your Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque Tournante",
			},

			damage: 100,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump GX",
				'fr-fr': "Hydrocanon-GX",
			},
			effect: {
				'en-us': "This attack does 40 more damage times the amount of Water Energy attached to this Pokémon. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 396597,
		tcgplayer: 197658
	}
}

export default card
