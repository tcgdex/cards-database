import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Heracross",
		de: "Skaraborn"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crust",
				de: "Crust"
			},
			effect: {
				en: "Any damage done to Heracross by attacks from your opponent's Basic Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				de: "Any damage done to Heracross by attacks from your opponent's Basic Pokémon is reduced by 20 (after applying Weakness and Resistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Get Even",
				de: "Get Even"
			},
			effect: {
				en: "If you have more Prize cards left than your opponent, this attack does 20 damage plus 10 more damage for each Prize card more than your opponent.",
				de: "If you hace more Prize cards left than your opponent, this attack does 20 damage plus 10 more damage for each Prize card more than your opponent."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276335,
		tcgplayer: 86063
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

