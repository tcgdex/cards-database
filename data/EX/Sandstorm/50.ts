import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
		de: "Pelipper"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wingull",
		fr: "Goelise"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Water Gun"
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Water Energy attached to Pelipper but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Bekipan qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "This attack does 30 damage plus 10 more damage for each  Energy attached to Pelipper but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 275827,
		tcgplayer: 87975
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
	]
}

export default card
