import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Maractus",
		fr: "Maracachi",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		556,
	],
	hp: 90,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Stun Needle",
				fr: "Para-Dard",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reinforced Needle",
				fr: "Épine Renforcée",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 40 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
