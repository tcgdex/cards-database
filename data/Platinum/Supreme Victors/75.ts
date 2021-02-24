import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		127,
	],
	hp: 90,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gripthrow",
				fr: "Lance-grippe",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire reprend dans sa main le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sever",
				fr: "Couper",
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Pokémon, this attack does 50 damage plus 30 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon de Niveau 2, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
