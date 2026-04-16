import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		en: "Claydol",
		fr: "Kaorine",
	},

	illustrator: "Midori Harada",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Cosmic Power",
				fr: "Force cosmik",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose up to 2 cards from your hand and put them on the bottom of your deck in any order. If you do, draw cards until you have 6 cards in your hand. This power can't be used if Claydol is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir jusqu'à 2 cartes de votre main et les placer au dessous de votre deck dans n'importe quel ordre. Piochez alors des cartes jusqu'à ce que vous ayez 6 cartes en main. Ce pouvoir ne peut pas être utilisé si Kaorine est affecté par un État Spécial.",
			},
		},
	],

	attacks: [
		{
			name: {
				en: "Spinning Attack",
				fr: "Attaque tournante",
			},
			damage: 40,
			cost: [
				"Fighting",
				"Colorless",
			],
			effect: {
				fr: "Défaussez 2 cartes Énergie attachées à Dracaufeu pour pouvoir utiliser cette attaque.",
			},
		},
	],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false
	},

	thirdParty: {
		cardmarket: 576786
	}
}

export default card
