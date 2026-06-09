import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Sceptile",
		de: "Gewaldro"
	},

	illustrator: "Reiko Tanoue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],
	
	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Breath",
				de: "Grüner Atem"
			},
			effect: {
				en: "When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.",
				de: "Wenn du 1 -Energiekarte von deiner Hand an Gewaldro anlegst, entferne 2 Schadensmarken von Gewaldro."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Blast",
				de: "Blätterkanonade"
			},
			effect: {
				en: "Does 20 damage times the amount of Grass Energy attached to Sceptile.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Gewaldro angelegten -Energien zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
				de: "Giftkrallen"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278902,
		tcgplayer: 88951
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
