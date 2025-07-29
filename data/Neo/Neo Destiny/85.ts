import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Totodile",
		fr: "Kaiminus",
		de: "Karnimani"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				de: "Water Gun"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Kaiminus en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				de: "Does 10 damage plus 10 more damage for each  Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	description: {
		fr: "Ses mâchoires surdéveloppées sont assez puissantes pour écraser n'importe quoi. Même les dresseurs adultes les plus expérimentés font très attention."
	},

	thirdParty: {
		cardmarket: 274737
	}
}

export default card
