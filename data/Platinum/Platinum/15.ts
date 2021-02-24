import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Growth",
				fr: "Croissance",
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to Shaymin.",
				fr: "Attachez à Shaymin une carte Énergie Grass de votre main",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d'Air",
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to Shaymin.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Shaymin.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
