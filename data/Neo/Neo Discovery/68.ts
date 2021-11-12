import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Unown [I]",
		fr: "Zarbi I"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hidden Power",
				fr: "Puissance cachée"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	abilities: [{
		name: {
			fr: "[Increase]"
		},

		effect: {
			fr: "Quand vous jouez Zarbi [I] depuis votre main, vous pouvez chercher dans votre deck une autre carte Zarbi et la placer sur votre Banc. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser ce pouvoir si votre Banc est plein."
		},

		type: "Pokemon Power"
	}]
}

export default card
