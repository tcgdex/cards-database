import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Murkrow",
		de: "Kramurx"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Evil Eye",
				de: "Böser Blick"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Put a damage counter on that Pokémon.",
				de: "Wähle 1 der Pokémon deines Gegners. Lege eine Schadensmarke auf dieses Pokémon."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blindside",
				de: "Wunder Punkt"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has a damage counter on it. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance.",
				de: "Wähle 1 der Pokémon deines Gegners, auf dem Schadensmarken liegen. Dieser Angriff fügt diesem Pokémon 20 Schadenspunkte zu. Wende keine Schwäche oder Resistenz an."
			},

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

	thirdParty: {
		cardmarket: 275337
	}
}

export default card
