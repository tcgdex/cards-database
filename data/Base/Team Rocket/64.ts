import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Ponyta",
		fr: "Ponyta",
		de: "Ponita"
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
				fr: "Flammèche",
				de: "Ember"
			},
			effect: {
				en: "Discard 1 Energy card attached to Ponyta in order to use this attack.",
				fr: "Défaussez 1 carte Énergie  attachée à Ponyta pour pouvoir utiliser cette attaque.",
				de: "Discard 1  Energy card attached to Ponyta in order to use this attack."
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
	},

	thirdParty: {
		cardmarket: 274117,
		tcgplayer: 88281
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
