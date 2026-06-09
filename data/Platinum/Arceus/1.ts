import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Charizard",
		de: "Glurak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],
	
	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmeleon",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Fire Formation",
				de: "Feuerformation"
			},
			effect: {
				en: "Each of Charizard's attacks does 10 more damage for each Fire Pokémon on your Bench to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				de: "Jeder Angriff von Glurak fügt den Aktiven Pokémon deines Gegners für jedes -Pokémon auf deiner Bank 10 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Fire Wing",
				de: "Feuerflügel"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Tail",
				de: "Brennender Schweif"
			},
			effect: {
				en: "Discard a Fire Energy attached to Charizard.",
				de: "Lege 1 -Energie, die an Glurak angelegt ist, auf deinen Ablagestapel."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278873,
		tcgplayer: 84191
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "cracked-ice"
		},
	]
}

export default card
