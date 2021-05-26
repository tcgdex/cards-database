import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Cramorant",
		fr: "Nigosier"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Gulp Missile",
				fr: "Dégobage Continu"
			},
			effect: {
				en: "Discard any number of Arrokuda from your Bench. This attack does 60 damage for each Arrokuda you discarded in this way.",
				fr: "Défaussez autant d’Embrochet que vous le voulez de votre Banc. Cette attaque inflige 60 dégâts pour chaque carte Embrochet défaussée de cette façon."
			},
			damage: "60×",

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
	retreat: 1,



}

export default card
