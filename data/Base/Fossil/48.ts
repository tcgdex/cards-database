import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		88,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nasty Goo",
				fr: "Mauvaise mélasse"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Minimize",
				fr: "Lilliput"
			},
			effect: {
				en: "All damage done by attacks to Grimer during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Tadmorv par des attaques durant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Vivant dans les tas d'ordures, il se nourrit des déchets polluants rejetés par les usines."
	}
}

export default card
