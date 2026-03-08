import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Raichu",
		de: "Raichu"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],
	
	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Boosted Voltage",
				de: "Erhöhte Spannung"
			},
			effect: {
				en: "If Raichu has a Pokémon Tool card attached to it, this attack does 20 damage to each of your opponent's Benched Pokémon that isn't an Evolved Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wenn an Raichu mindestens 1 Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners, das kein entwickeltes Pokémon ist, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder Blast",
				de: "Donnerkeil"
			},
			effect: {
				en: "Discard a Lightning Energy card attached to Raichu.",
				de: "Entferne 1 -Energiekarte, die an Raichu angelegt ist, und lege sie auf den Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278899,
		tcgplayer: 88516
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["pre-release"]
		},
		{
			type: "normal",
			stamp: ["pre-release","staff"]
		}
	]
}

export default card
