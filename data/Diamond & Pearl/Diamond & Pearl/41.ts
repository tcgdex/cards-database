import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Countercharge",
				fr: "Contre-charge",
			},
			effect: {
				en: "Flip a coin. If heads, move all damage counters from Wobbuffet to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, déplacez tous les marqueurs de dégât de Qulbutoké sur le Pokémon Défenseur.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
