import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Mightyena δ",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 70,
	types: [
		"Darkness",
		"Metal",
	],
	evolveFrom: {
		en: "Poochyena",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Delta Fang",
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, that Pokémon can't attack during your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Gang Up",
			},
			effect: {
				en: "Does 10 damage times the number of Darkness Pokémon and Metal Pokémon you have in play.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
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
