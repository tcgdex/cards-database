import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus LV. X",
		fr: "Arceus",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],

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
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
				fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
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
			},
			effect: {
				en: "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
				fr: "Lancez une pièce. Si c'est pile, les dégâts de base de cette attaque sont de 50 au lieu de 100.",
			},
			damage: 100,

		},
	],


	retreat: 1,



}

export default card
