import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Sceptile",
		de: "Gewaldro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		254,
	],
	
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Grovyle",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Supply",
				de: "Blättervorrat"
			},
			effect: {
				en: "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
				de: "Du kannst 1 Basis-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Cut",
				de: "Doppel-Zerschneider"
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 70 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "70x",

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

	retreat: 1,

	thirdParty: {
		cardmarket: 278902,
		tcgplayer: 88952
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
