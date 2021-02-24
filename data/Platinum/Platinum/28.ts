import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Giratina",
		fr: "Giratina",
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		487,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dragonbreath",
				fr: "Dracosouffle",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
