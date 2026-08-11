import { Card } from 'models/database/card'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
		'de-de': "Tangela"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		114,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Reactive Healing",
				'fr-fr': "Guérison réactive",
				'de-de': "Reaktive Heilung"
			},
			effect: {
				'en-us': "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.",
				'fr-fr': "Lorsque vous attachez une carte Énergie réaction de votre main à Saquedeneu, retirez à Saquedeneu tous ses marqueurs de dégât.",
				'de-de': "Immer wenn du eine Reaktions-Energiekarte von deiner Hand an Tangela anlegst, entferne alle Schadensmarken von Tangela."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Entangling Vines",
				'fr-fr': "Plantes emmêlantes",
				'de-de': "Einschnürende Ranken"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, that Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Si le Pokémon Défenseur est une Pokémon de base, il ne peut pas attaquer lors du prochain tour de votre adversaire.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Wrap",
				'fr-fr': "Enveloppe douce",
				'de-de': "Sanfte Umarmung"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276921,
		tcgplayer: 89743
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
