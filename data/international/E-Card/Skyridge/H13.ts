import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Kabutops",
		'de-de': "Kabutops"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [141],

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Kabuto",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Aura",
				'de-de': "Ursprüngliche Aura"
			},
			effect: {
				'en-us': "As long as Kabutops is your Active Pokémon, neither player can play Basic Pokémon or Evolution cards from his or her hand to evolve Benched Pokémon.",
				'de-de': "Solange Kabutops dein aktives Pokémon ist, kann keiner der Spieler Basis- Pokémon oder Entwicklungskarten aus seiner Hand spielen, um Pokémon auf seiner Bank zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Dual Cut",
				'de-de': "Doppel-Zerschneider"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86391,
				cardmarket: 275272
			},
		},
	],
}

export default card
