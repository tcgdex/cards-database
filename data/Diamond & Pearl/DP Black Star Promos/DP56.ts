import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Arceus",
		de: "Arceus"
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Multitype",
				de: "Variabilität"
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
				de: "Arceus LV.X hat denselben Typ wie sein vorheriges Level."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Meteor Blast",
				de: "Meteorexplosion"
			},
			effect: {
				en: "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
				de: "Wirf 1 Münze. Bei \"Zahl\" beträgt der Grundschaden dieses Angriffs 50 Schadenspunkte anstelle von 100 Schadenspunkten."
			},
			damage: 100,

		},
	],






}

export default card
