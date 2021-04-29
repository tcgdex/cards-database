import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Blaziken-EX",
		fr: "Braségali-EEX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Common",
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
				en: "Fist of Focus",
				fr: "Poing Déterminé",
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
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
				en: "Flare Storm",
				fr: "Tempête Flamboyante",
			},
			effect: {
				en: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 20 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
