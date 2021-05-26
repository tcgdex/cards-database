import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Aegislash VMAX",
		fr: "Exagide VMAX"
	},
	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 320,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Aegislash V",
		fr: "Exagide-V"
	},



	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Max Hack",
				fr: "Taillomax"
			},
			effect: {
				en: "This attack does 30 more damage for each Prize card you have taken.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Récompense que vous avez récupérée."
			},
			damage: "160+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 3,



}

export default card
