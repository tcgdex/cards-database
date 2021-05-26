import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		241,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Milk Cannon",
				fr: "Canon à Lait",
			},
			effect: {
				en: "Reveal any number of Moomoo Milk cards in your hand. This attack does 60 damage for each card you revealed in this way.",
				fr: "Montrez autant de cartes Lait Meumeu que vous voulez de votre main. Cette attaque inflige 60 dégâts pour chaque carte montrée de cette façon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
