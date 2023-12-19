import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ho-oh",
		fr: "Ho-oh",
		de: "Ho-oh"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 90,

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
				"Colorless",
			],
			name: {
				en: "Rainbow Burn",
				fr: "Brûlure arcenciel",
				de: "Rainbow Burn"
			},
			effect: {
				en: "This attack does 30 damage plus 10 more for each type of Basic Energy card if any, attached to Ho-oh",
				fr: "Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires par type de carte Énergie de base attachée à Ho-oh, le cas échéant.",
				de: "This attack does 30 damage plus 10 more damage for each type of Basic Energy card, if any, attached to Ho-oh."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "D'après la légende, son corps luirait de sept couleurs. Un arc-en-ciel apparaît toujours dans son sillage."
	}
}

export default card
