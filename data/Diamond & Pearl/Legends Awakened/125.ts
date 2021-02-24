import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 50,
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
				en: "Crystal Barrier",
				fr: "Barrière de cristal",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Tentacool during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Tentacool lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Mysterious Beam",
				fr: "Rayon mystérieux",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
