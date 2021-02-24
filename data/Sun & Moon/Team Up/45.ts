import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		523,
	],
	hp: 120,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Raid",
				fr: "Razzia Obscure",
			},
			effect: {
				en: "If this Pokémon evolved from Blitzle during this turn, this attack does 90 more damage.",
				fr: "Si ce Pokémon a évolué de Zébibron pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mach Bolt",
				fr: "Éclair Fulgurant",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
