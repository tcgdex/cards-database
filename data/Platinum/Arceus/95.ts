import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus LV. X",
		fr: "Arceus",
		de: "Arceus"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
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
				fr: "Multi-Type",
				de: "Variabilität"
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
				fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
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
				fr: "Explosion de météores",
				de: "Meteorexplosion"
			},
			effect: {
				en: "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
				fr: "Lancez une pièce. Si c'est pile, les dégâts de base de cette attaque sont de 50 au lieu de 100.",
				de: "Wirf 1 Münze. Bei \"Zahl\" beträgt der Grundschaden dieses Angriffs 50 Schadenspunkte anstelle von 100 Schadenspunkten."
			},
			damage: 100,

		},
	],


	retreat: 1,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
