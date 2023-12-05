import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Electrode",
		de: "Lektrobal"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plasma",
				de: "Plasma"
			},
			effect: {
				en: "If there are any Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Electrode.",
				de: "Wenn mindestens eine -Energiekarte in deinem Ablagestapel ist, wirf eine Münze. Lege bei 'Kopf' eine davon an Lektrobal an."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Self destruct",
				de: "Finale"
			},
			effect: {
				en: "This attack does 20 damage to each Pokémon on each player's bench. (Don't apply Weakness and Resistance for Benched Pokémon) Electrode does 100 damage to itself.",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank beider Spieler 20 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.) Lektrobal fügt sich selber 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
