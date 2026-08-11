import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'de-de': "Gewaldro"
	},

	illustrator: "Reiko Tanoue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [254],
	
	hp: 120,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grovyle"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Green Breath",
				'de-de': "Grüner Atem"
			},
			effect: {
				'en-us': "When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.",
				'de-de': "Wenn du 1 -Energiekarte von deiner Hand an Gewaldro anlegst, entferne 2 Schadensmarken von Gewaldro."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Blast",
				'de-de': "Blätterkanonade"
			},
			effect: {
				'en-us': "Does 20 damage times the amount of Grass Energy attached to Sceptile.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Gewaldro angelegten -Energien zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws",
				'de-de': "Giftkrallen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88951,
				cardmarket: 278902
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278902,
				tcgplayer: 88951
			}
		},
	],

}

export default card
