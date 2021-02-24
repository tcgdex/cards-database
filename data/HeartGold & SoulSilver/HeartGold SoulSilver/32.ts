import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
		fr: "Fleurisson",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Magma Punch",
				fr: "Poing magma",
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Spin",
				fr: "Danseflamme",
			},
			effect: {
				en: "Discard 2 Energy attached to Typhlosion.",
				fr: "Défaussez-vous de 2 cartes Énergie attachées à Typhlosion.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
