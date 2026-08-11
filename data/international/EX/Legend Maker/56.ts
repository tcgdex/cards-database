import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Lileep",
		'fr-fr': "Lilia",
		'de-de': "Liliep"
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
		'en-us': "Root Fossil",
		'fr-fr': "Fossile racine"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tender Tentacles",
				'fr-fr': "Tentacules tendres",
				'de-de': "Zarte Tentakeln"
			},
			effect: {
				'en-us': "If Lileep has any React Energy cards attached to it, remove 2 damage counters from Lileep.",
				'fr-fr': "Si Lilia possède des cartes Énergie réaction, retirez-lui 2 marqueurs de dégât.",
				'de-de': "Wenn an Liliep mindestens eine Reaktions-Energiekarte angelegt ist, entferne 2 Schadensmarken von Liliep."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
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
