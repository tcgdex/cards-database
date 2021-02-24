import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Mightyena",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Poochyena",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plunder",
			},
			effect: {
				en: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Burst",
			},
			effect: {
				en: "If Sidney's Stadium is in play, this attack does 50 damage plus 20 more damage.",
			},
			damage: 50,

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
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
