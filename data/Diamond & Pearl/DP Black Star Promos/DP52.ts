import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Darkrai",
		de: "Darkrai"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		491,
	],
	hp: 90,
	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Darkness Aura",
				de: "Darkness Aura"
			},
			effect: {
				en: "If you have Cresselia in play, each of Darkrai's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				de: "If you have Cresselia in play, each of Darkrai's attacks does 20 more damage to the Defending Pokémon (before applying Weakness and Resistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				de: "Hypnoblast"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 60,

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
			value: "-20"
		},
	],




}

export default card
