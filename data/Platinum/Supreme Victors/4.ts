import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Electivire FB",
		fr: "Elekable ",
		de: "Elevoltek FB"
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare Holo",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 90,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dump and Draw",
				fr: "Jeter et piocher",
				de: "Wegwerfen und Ziehen"
			},
			effect: {
				en: "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
				fr: "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
				de: "Lege bis zu 2 Energiekarten von deiner Hand auf deinen Ablagestapel. Ziehe für jede auf diese Weise auf den Ablagestapel gelegte Karte 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Current",
				fr: "Courant électrique",
				de: "Fließende Elektrizität"
			},
			effect: {
				en: "Move a Lightning Energy card attached to Electivire FB to 1 of your Benched Pokémon.",
				fr: "Déplacez une carte Énergie Lightning attachée à Elekable  sur 1 de vos Pokémon de Banc.",
				de: "Entferne 1 an Elevoltek FB angelegte -Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
