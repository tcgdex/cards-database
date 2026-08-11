import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Blaziken EX",
		'fr-fr': "Braségali EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		257,
	],

	hp: 170,

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
				'en-us': "Fist of Focus",
				'fr-fr': "Poing Déterminé",
			},
			effect: {
				'en-us': "Attach an Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flare Storm",
				'fr-fr': "Tempête Flamboyante",
			},
			effect: {
				'en-us': "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "100＋",

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
		cardmarket: 289717
	}
}

export default card
