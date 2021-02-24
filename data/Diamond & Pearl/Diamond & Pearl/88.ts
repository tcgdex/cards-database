import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Marill",
		fr: "Marill",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		183,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},
			effect: {
				en: "If Marill is evolved from Azurill, this attack does 10 damage plus 20 more damage.",
				fr: "Si Marill évolue d'Azurill, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Splashing Turn",
				fr: "Tour éclaboussant",
			},
			effect: {
				en: "Switch Marill with 1 of your Benched Pokémon.",
				fr: "Échangez Marill avec 1 des Pokémon de votre Banc.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
