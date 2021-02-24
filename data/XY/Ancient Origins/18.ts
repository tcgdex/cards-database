import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Burning Scales",
				fr: "Stop Θ",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wind Wheel",
				fr: "Écailles Enflammées",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Roue Éolienne",
			},
			effect: {
				fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
			},
			damage: 80,

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
