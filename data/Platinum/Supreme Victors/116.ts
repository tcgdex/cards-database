import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Mudkip",
		fr: "Gobou",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		258,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mud Sport",
				fr: "Lance-boue",
			},
			effect: {
				en: "If Mudkip has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage.",
				fr: "Si Gobou possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
