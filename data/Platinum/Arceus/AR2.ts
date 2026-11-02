import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus",
		de: "Arceus"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [493],

	hp: 90,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Refresh",
				de: "Blätterheilung"
			},
			effect: {
				en: "Remove 3 damage counters from each of your Benched Pokémon.",
				de: "Entferne 3 Schadensmarken von jedem Pokémon auf deiner Bank."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It is said to have emerged from an egg in a place where there was nothing, then shaped the world.",
		de: "Man sagt, es sei im Nichts aus einem Ei geschlüpft und habe dann die Welt geformt."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278861,
				tcgplayer: 83593
			}
		}
	]
}

export default card
