import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Piloswine",
		de: "Keifel"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		221,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Swinub",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Freezing Breath",
				de: "Eisiger Atem"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt gelähmt. Bei 'Zahl' schläft das verteidigende Pokémon jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trample",
				de: "Niederschlagen"
			},
			effect: {
				en: "For each Benched Pokémon (yours and your opponent's), flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wirf für jedes Pokémon auf der Bank (auf deiner und der deines Gegners) eine Münze. Bei 'Kopf' fügt dieser Angriff jedem Pokémon 20 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275233,
		tcgplayer: 88113
	}
}

export default card
