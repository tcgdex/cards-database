import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		de: "Tangela"
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
				en: "Reactive Healing",
				fr: "Guérison réactive",
				de: "Reaktive Heilung"
			},
			effect: {
				en: "Whenever you attach a React Energy card from your hand to Tangela, remove all damage counters from Tangela.",
				fr: "Lorsque vous attachez une carte Énergie réaction de votre main à Saquedeneu, retirez à Saquedeneu tous ses marqueurs de dégât.",
				de: "Immer wenn du eine Reaktions-Energiekarte von deiner Hand an Tangela anlegst, entferne alle Schadensmarken von Tangela."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Entangling Vines",
				fr: "Plantes emmêlantes",
				de: "Einschnürende Ranken"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est une Pokémon de base, il ne peut pas attaquer lors du prochain tour de votre adversaire.",
				de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
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
				en: "Gentle Wrap",
				fr: "Enveloppe douce",
				de: "Sanfte Umarmung"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				de: "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
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
