import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Cresselia",
		de: "Cresselia"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Lunar Aura",
				de: "Lunar Aura"
			},
			effect: {
				en: "If you have Darkrai in play, remove 1 damage counter from Cresselia between turns.",
				de: "If you have Darkrai in play, remove 1 damage counter from Cresselia between turns."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Lunar Flight",
				de: "Lunar Flight"
			},
			effect: {
				en: "Does 80 damage minus 10 damage for each damage counter on Cresselia.",
				de: "Does 80 damage minus 10 damage for each damage counter on Cresselia."
			},
			damage: "80-",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: "holo",
		}
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
