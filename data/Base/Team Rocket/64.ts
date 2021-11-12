import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche"
			},
			effect: {
				en: "Discard 1 Energy card attached to Ponyta in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Ponyta pour pouvoir utiliser cette attaque."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Ce gentil herbivore accepte d'être monté. Toutefois, il faut prendre garde à ne pas se brûler."
	}
}

export default card
