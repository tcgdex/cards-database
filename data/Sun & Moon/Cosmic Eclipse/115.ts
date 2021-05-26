import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		530,
	],
	hp: 140,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Eleventh Hour Tackle",
				fr: "Tacle Désespéré",
			},
			effect: {
				en: "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
				fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Drill Bazooka",
				fr: "Perceuse Bazooka",
			},
			effect: {
				en: "Discard the top 4 cards of your deck.",
				fr: "Défaussez les 4 cartes du dessus de votre deck.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
