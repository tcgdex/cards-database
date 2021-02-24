import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		413,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Solar Ray",
				fr: "Rayonnement Solaire",
			},
			effect: {
				en: "Heal 20 damage from each of your Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
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
				en: "Leaf Cutter",
				fr: "Coupe Feuille",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
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

	retreat: 2,



}

export default card
