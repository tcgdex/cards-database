import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		de: "Lapras"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Grind"
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Lapras.",
				fr: "Inflige 10 dégâts multipliés par le nombre d'Énergies attachées à Lokhlass",
				de: "Does 10 damage times the amount of Energy attached to Lapras."
			},
			damage: "10x",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser glace",
				de: "Ice Beam"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278500,
		tcgplayer: 86619
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
