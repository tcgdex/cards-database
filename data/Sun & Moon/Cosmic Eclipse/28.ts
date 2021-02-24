import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Entei",
		fr: "Entei",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		244,
	],
	hp: 130,
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
				en: "Rally Back",
				fr: "Répercussions",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
