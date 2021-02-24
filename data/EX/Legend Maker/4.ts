import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Delcatty",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		301,
	],
	hp: 80,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Skitty",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reactive Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move a React Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Delcatty is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Link",
			},
			effect: {
				en: "Search your discard pile for an Energy card and attach it to Delcatty.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
