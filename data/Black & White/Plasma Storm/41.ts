import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		614,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Powerful Rage",
				fr: "Rage Massive",
			},
			effect: {
				en: "Does 20 damage times the number of damage counters on this Pokémon.",
				fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Glacier Drop",
				fr: "Chute de Glacier",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
