import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Lileep",
		fr: "Lilia",
		de: "Liliep"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		345,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Root Fossil",
		fr: "Fossile racine"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tender Tentacles",
				fr: "Tentacules tendres",
				de: "Zarte Tentakeln"
			},
			effect: {
				en: "If Lileep has any React Energy cards attached to it, remove 2 damage counters from Lileep.",
				fr: "Si Lilia possède des cartes Énergie réaction, retirez-lui 2 marqueurs de dégât.",
				de: "Wenn an Liliep mindestens eine Reaktions-Energiekarte angelegt ist, entferne 2 Schadensmarken von Liliep."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
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

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276933,
		tcgplayer: 86787
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card
