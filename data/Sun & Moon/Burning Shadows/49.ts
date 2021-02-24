import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
	},
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		202,
	],
	hp: 120,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Shadowy Knot",
				fr: "Nœud Sombre",
			},
			effect: {
				en: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 50 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
