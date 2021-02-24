import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Salamence",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],

	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Shelgon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Top Accelerator",
			},
			effect: {
				en: "Once during your turn (before your attack), you may reveal the top card of your deck. If that card is a basic Energy card, attach it to 1 of your Pokémon. If that card isn't a basic Energy card, discard it. This power can't be used if Salamence is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Shoot Through",
			},
			effect: {
				en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
