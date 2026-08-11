import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Celebi",
		'de-de': "Celebi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [251],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crystal Type",
				'de-de': "Kristall-Typ"
			},
			effect: {
				'en-us': "Whenever you attach a Grass, Water, or Psychic basic Energy card from your hand to Celebi, Celebi's type (color) becomes the same as that type of Energy until the end of the turn.",
				'de-de': "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Celebi anlegst, ändert sich Celebis Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Water",
			],
			name: {
				'en-us': "Empathic Healing",
				'de-de': "Empathische Heilung"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Celebi and each Pokémon that's the same type (color) as Celebi.",
				'de-de': "Entferne 2 Schadensmarken von Celebi und allen Pokémon, die den gleichen Typ (die gleiche Farbe) wie Celebi haben."
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'de-de': "Schädelbrummen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 84144,
				cardmarket: 275403
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 84144,
				cardmarket: 275403
			},
		},
	],
}

export default card
