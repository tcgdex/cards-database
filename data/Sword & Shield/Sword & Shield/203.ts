import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lapras VMAX",
		fr: "Lokhlass VMAX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 320,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lapras V",
		fr: "Lokhlass V",
	},
	stage: "VMAX",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "G-Max Pump",
				fr: "Pompe G-Max",
			},
			effect: {
				en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			},
			damage: "90+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
