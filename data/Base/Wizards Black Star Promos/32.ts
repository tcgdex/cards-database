import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Smeargle",
		fr: "Queulorior"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		235,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Paint",
				fr: "Peinture"
			},
			effect: {
				en: "Flip a coin. If heads, choose a type (other than colorless) and put a Coloring counter on the Defending Pokémon. That Pokémon is now the type you choose. If it already had a Coloring counter, remove the old one. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est face, choisissez un type (autre qu'Incolore) et placez un marqueur Colorant sur le Pokémon Défenseur. Ce Pokémon est maintenant du type que vous avez choisi. S'il a déjà un marqueur Colorant, retirez l'ancien. Si c'est pile, cette attaque ne fait rien."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		fr: "À l'âge adulte, il a tendance à laisser ses camarades imprimer leurs empreintes sur son dos."
	}
}

export default card
