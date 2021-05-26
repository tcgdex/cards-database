import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},
	illustrator: "Wataru Kawahara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-lames",
			},
			effect: {
				en: "During your next turn, Zangoose's Lost Claw attack's base damage is 60.",
				fr: "Pendant votre prochain tour, la Griffe perdue de Mangriff inflige 60 dégâts de base.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lost Claw",
				fr: "Griffe perdue",
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and put it in the Lost Zone.",
				fr: "Choisissez au hasard 1 carte dans la main de votre adversaire et placez-la dans la Zone Perdue.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
