import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
	},
	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Magnetic Draw",
				fr: "Pioche Magnétique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw cards until you have 4 cards in your hand.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 4 cartes en main.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
