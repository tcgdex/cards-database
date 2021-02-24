import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Rob",
				fr: "Dérober",
			},
			effect: {
				en: "Look at your opponent's hand. If your opponent has any Pokémon Tool or Technical Machine cards in his or her hand, put those cards on top of his or her deck. Your opponent shuffles his or her deck afterward.",
				fr: "Regardez la main de votre adversaire. S'il possède des cartes Outil Pokémon ou Machine Technique, placez ces cartes au dessus de son deck. Ensuite, votre adversaire mélange son deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
