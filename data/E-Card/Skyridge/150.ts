import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Kabutops",
		de: "Kabutops"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Kabuto",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
				de: "Kristall-Typ"
			},
			effect: {
				en: "Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutop's type (color) becomes the same as that type of energy until the end of the turn.",
				de: "Immer wenn du eine  -,  -oder eine  - Basis Energiekarte aus deiner Hand an Kabutops anlegst, ändert sich Kabutops'Typ (Farbe) bis zum Ende des Zuges zum gleichen Typ wie diese Energie."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Fighting",
			],
			name: {
				en: "Draining Cut",
				de: "Entwäserungsschnitt"
			},
			effect: {
				en: "Remove a damage counter from Kabutops.",
				de: "Entferne eine Schadensmarke von Kabutops."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Triple Cutter",
				de: "Dreifachklinge"
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30x",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
