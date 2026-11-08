import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo"
	},

	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Levitate",
				'fr-fr': "Lévitation"
			},
			effect: {
				'en-us': "If this Pokémon has any Energy attached to it, this Pokémon has no Retreat Cost.",
				'fr-fr': "Si de l'Énergie est attachée à ce Pokémon, ce Pokémon n'a pas de Coût de Retraite."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Smokescreen",
				'fr-fr': "Brouillard"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
	},

	thirdParty: {
		cardmarket: 295154
	}
}

export default card
