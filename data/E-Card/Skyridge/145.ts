import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Celebi",
		de: "Celebi"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				de: "Kristall-Typ"
			},
			effect: {
				en: "Whenever you attach a Grass, Water, or Psychic basic Energy card from your hand to Celebi, Celebi's type (color) becomes the same as that type of energy until the end of the turn.",
				de: "Immer wenn du eine -, - oder -Basis-Energiekarte aus deiner Hand an Celebi anlegst, ändert sich Celebis Typ (Farbe) bis zum Ende des Zuges zu dem gleichen Typ wie diese Energie."
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
				en: "Empathetic Healing",
				de: "Empathische Heilung"
			},
			effect: {
				en: "Remove 2 damage counters from Celebi and each Pokémon that's the same type (color) as Celebi.",
				de: "Entferne 2 Schadensmarken von Celebi und allen Pokémon, die den gleichen Typ (die gleiche Farbe) wie Celebi haben."
			},

		},
		{
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mind Bend",
				de: "Schädelbrummen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
