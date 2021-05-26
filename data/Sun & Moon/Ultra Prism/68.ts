import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
	},
	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		449,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Eleventh Hour Tackle",
				fr: "Tacle Désespéré",
			},
			effect: {
				en: "If there are 3 or fewer cards in your deck, this attack does 130 more damage.",
				fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 130 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
