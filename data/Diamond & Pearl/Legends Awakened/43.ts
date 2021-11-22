import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Uxie",
		fr: "Créhelf",
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
				en: "Set Up",
				fr: "Mise en place",
			},
			effect: {
				en: "Once during your turn, when you put Uxie from your hand onto your Bench, you may draw cards until you have 7 cards in your hand.",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Créhelf de votre main sur votre Banc, vous pouvez piocher des cartes jusqu'à ce que vous ayez 7 cartes en main.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Psychic Restore",
				fr: "Restitution psy",
			},
			effect: {
				en: "You may put Uxie and all cards attached to it on the bottom of your deck in any order.",
				fr: "Vous pouvez placer Créhelf ainsi que toutes les cartes qui lui sont attachées au dessous de votre deck dans n'importe quel ordre.",
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
		fr: "On l'appelle \"être du savoir\". On raconte que son regard a le pouvoir d'effacer la mémoire."
	}
}

export default card
