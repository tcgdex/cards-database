import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo"
	},

	illustrator: "TOKIYA",
	rarity: "None",
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
		en: "Koffing",
		fr: "Smogo"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitate",
				fr: "Lévitation"
			},
			effect: {
				en: "If this Pokémon has any Energy attached to it, this Pokémon has no Retreat Cost.",
				fr: "Si de l'Énergie est attachée à ce Pokémon, il n'a pas de Coût de Retraite."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien."
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

	retreat: 3
}

export default card
