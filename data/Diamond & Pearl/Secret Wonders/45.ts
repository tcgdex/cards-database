import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		286,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Drain Punch",
				fr: "Vampipoing",
			},
			effect: {
				en: "Remove from Breloom a number of damage counters equal to the amount of Energy attached to the Defending Pokémon.",
				fr: "Retirez à Chapignon autant de marqueurs de dégât qu'il y a d'Énergie attachée au Pokémon Défenseur.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Homing Uppercut",
				fr: "Uppercut à tête chercheuse",
			},
			effect: {
				en: "If the Defending Pokémon's Retreat Cost is 0, this attack does 60 damage plus 60 more damage.",
				fr: "Si le Coût de retraite du Pokémon Défenseur est de 0, cette attaque inflige 60 dégâts plus 60 dégâts supplémentaires.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
