import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Uxie",
		'fr-fr': "Créhelf",
		'de-de': "Selfe"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		480,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Set Up",
				'fr-fr': "Mise en place",
				'de-de': "Aufbauen"
			},
			effect: {
				'en-us': "Once during your turn, when you put Uxie from your hand onto your Bench, you may draw cards until you have 7 cards in your hand.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous placez Créhelf de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 7 cartes en main.",
				'de-de': "Einmal während deines Zuges kannst du, wenn du Selfe von deiner Hand auf deine Bank legst, so viele Karten ziehen, bis du 7 Karten auf der Hand hast."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Psychic Restore",
				'fr-fr': "Restitution psy",
				'de-de': "Psycho-Erneuerung"
			},
			effect: {
				'en-us': "You may put Uxie and all cards attached to it on the bottom of your deck in any order.",
				'fr-fr': "Vous pouvez placer Créhelf ainsi que toutes les cartes qui lui sont attachées au dessous de votre deck dans n'importe quel ordre.",
				'de-de': "Du kannst Selfe und alle an es angelegten Karten in beliebiger Reihenfolge unter dein Deck legen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Known as \"The Being of Knowledge.\" It is said that it can wipe out the memory of those who see its eyes.",
		'fr-fr': "On l'appelle \"être du savoir\". On raconte que son regard a le pouvoir d'effacer la mémoire."
	},

	thirdParty: {
		cardmarket: 278192,
		tcgplayer: 90260
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "league"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"]
		}
	]
}

export default card
