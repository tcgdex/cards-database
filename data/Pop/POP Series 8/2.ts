import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Lucario",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Blocking Punch",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Lucario by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Striking Kick",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects of the Defending Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
