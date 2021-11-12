import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Water",
				"Lightning",
			],
			name: {
				en: "Elemental Blast",
				fr: "Explosion élémentaire"
			},
			effect: {
				en: "Discard a Energy card, a Energy card, and a Energy card attached to Lugia in order to use this attack.",
				fr: "Défaussez une carte Énergie , une carte Énergie  et une carte Énergie  attachées à Lugia pour pouvoir utiliser cette attaque."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
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
		fr: "On prétend qu'il passe le plus clair de son temps au fond des mers, car ses pouvoirs sont trop puissants."
	}
}

export default card
