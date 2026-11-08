import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Charizard EX",
		'fr-fr': "Dracaufeu-EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 180,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Cloak",
				'fr-fr': "Manteau de Feu",
			},
			effect: {
				'en-us': "Attach a Fire Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie Fire de votre pile de défausse à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Burning Breath",
				'fr-fr': "Souffle de Feu",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288405,
		tcgplayer: 113669
	}
}

export default card
