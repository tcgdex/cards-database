import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Smeargle",
		'fr-fr': "Queulorior"
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
				'en-us': "Paint",
				'fr-fr': "Peinture"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose a type (other than colorless) and put a Coloring counter on the Defending Pokémon. That Pokémon is now the type you choose. If it already had a Coloring counter, remove the old one. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez un type (autre qu'Incolore) et placez un marqueur Colorant sur le Pokémon Défenseur. Ce Pokémon est maintenant du type que vous avez choisi. S'il a déjà un marqueur Colorant, retirez l'ancien. Si c'est pile, cette attaque ne fait rien."
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
	retreat: 1,


	description: {
		'en-us': "Once it becomes an adult, it has a tendency to let its comrades plant footprints on its back.",
		'fr-fr': "À l'âge adulte, il a tendance à laisser ses camarades imprimer leurs empreintes sur son dos."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89353
			},
		}
	]
}

export default card
