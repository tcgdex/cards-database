import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Aerodactyl",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		142,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Mysterious Fossil",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Reactive Protection",
			},
			effect: {
				en: "Any damage done to Aerodactyl by attacks from your opponent's Pokémon is reduced by 10 for each React Energy card attached to Aerodactyl (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Blow",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Aerodactyl.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Stroke",
			},
			effect: {
				en: "During your opponent's next turn, prevent all effects, including damage, done to Aerodactyl by attacks from your opponent's Pokémon-ex.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
