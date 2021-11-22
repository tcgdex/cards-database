import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Metang",
		fr: "Metang",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		375,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Beldum",
		fr: "Terhal",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Psyshock",
				fr: "Choc psy",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bullet Punch",
				fr: "Pisto-Poing",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque face.",
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		fr: "Il est formé de deux Terhal soudés. Son corps de fer résiste à un choc avec un avion à réaction."
	}
}

export default card
