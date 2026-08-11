import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Sceptile",
		'de-de': "Gewaldro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [254],
	
	hp: 130,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grovyle"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Supply",
				'de-de': "Blättervorrat"
			},
			effect: {
				'en-us': "You may attach a basic Energy card from your hand to 1 of your Pokémon.",
				'de-de': "Du kannst 1 Basis-Energiekarte von deiner Hand an 1 deiner Pokémon anlegen."
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
				'en-us': "Dual Cut",
				'de-de': "Doppel-Zerschneider"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 70 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 70 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "70×",

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

	description: {
		'en-us': "The leaves that grow on its arms can slice down thick trees. It is without peer in jungle combat."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88952,
				cardmarket: 278902
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278902,
				tcgplayer: 88952
			}
		},
	],

}

export default card
