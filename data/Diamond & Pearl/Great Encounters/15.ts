import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Claydol",
		fr: "Kaorine",
		de: "Lepumentas"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		344,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cosmic Power",
				fr: "Force cosmik",
				de: "Kosmik-Kraft"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose up to 2 cards from your hand and put them on the bottom of your deck in any order. If you do, draw cards until you have 6 cards in your hand. This power can't be used if Claydol is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir jusqu'à 2 cartes de votre main et les placer au dessous de votre deck dans n'importe quel ordre. Piochez alors des cartes jusqu'à ce que vous ayez 6 cartes en main. Ce pouvoir ne peut pas être utilisé si Kaorine est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du bis zu 2 Karten von deiner Hand wählen und in beliebiger Reihenfolge unter dein Deck legen. Wenn du das machst, ziehe so viele Karten, bis du 6 Karten auf der Hand hast. Diese Poké-Power kann nicht benutzt werden, wenn Lepumentas von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque tournante",
				de: "Rundumangriff"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277917,
		tcgplayer: 84337
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
			stamp: ["dylan-lefavour"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
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
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
