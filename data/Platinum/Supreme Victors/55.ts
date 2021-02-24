import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		421,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-fleur",
			},
			effect: {
				en: "Flip 3 coins. This attack does 30 damage times the number of heads. Cherrim is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces. Ceriflor est maintenant Confus.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
