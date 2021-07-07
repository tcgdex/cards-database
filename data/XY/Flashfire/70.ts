import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 110,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Revenge",
				fr: "Vendetta",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent’s attack during his or her last turn, this attack does 70 more damage.",
				fr: "Si l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
