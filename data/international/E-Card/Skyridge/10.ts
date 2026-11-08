import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Manipulate",
				'de-de': "Manipulieren"
			},
			effect: {
				'en-us': "When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your Bench. Then, flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.",
				'de-de': "Wenn du Gengar aus deiner Hand spielst, um dein aktives Pokémon zu entwickeln, kannst du ein Basis-Pokémon (aber kein Baby-Pokémon) aus deinem Ablagestapel nehmen und auf deine Bank legen. Wirf dann 3 Münzen. Wähle für jeden geworfenen 'Kopf' eine Basis-Energiekarte aus deinem Ablagestapel und lege sie an dieses Pokémon an."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydrokinesis",
				'de-de': "Hydrokinese"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verbrannt. Bei 'Zahl' ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85669,
				cardmarket: 275250
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85669,
				cardmarket: 275250
			},
		},
	],
}

export default card
