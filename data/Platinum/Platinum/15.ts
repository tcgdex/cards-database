import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Shaymin",
		fr: "Shaymin",
		de: "Shaymin"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo",
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
				de: "Growth"
			},
			effect: {
				en: "Attach a Grass Energy card from your hand to Shaymin.",
				fr: "Attachez à Shaymin une carte Énergie Grass de votre main",
				de: "Attach a  Energy card from your hand to Shaymin."
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
				de: "Air Slash"
			},
			effect: {
				en: "Flip a coin. If tails, discard an Energy attached to Shaymin.",
				fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie attachée à Shaymin.",
				de: "Flip a coin. If tails, discard all Energy attached to Shaymin."
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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
