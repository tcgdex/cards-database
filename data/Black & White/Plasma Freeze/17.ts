import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Reshiram",
		fr: "Reshiram",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		643,
	],
	hp: 130,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Purifying Flame",
				fr: "Flamme Purifiante",
			},
			effect: {
				en: "Remove all Special Conditions from this Pokémon.",
				fr: "Retirez tous les États Spéciaux de ce Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fusion Flare",
				fr: "Flamme Croix",
			},
			effect: {
				en: "If Zekrom is on your Bench, this attack does 40 more damage.",
				fr: "Si Zekrom est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
