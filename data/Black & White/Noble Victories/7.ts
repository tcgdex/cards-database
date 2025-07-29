import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Crustle",
		fr: "Crabaraque",
		es: "Crustle",
		it: "Crustle",
		pt: "Crustle",
		de: "Castellith"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		558,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dwebble",
		fr: "Crabicoque",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts supplémentaires.",
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
				en: "Reckless Charge",
				fr: "Attaque Imprudente",
			},
			effect: {
				en: "This Pokémon does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige 10 dégâts.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280130
	}
}

export default card
