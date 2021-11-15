import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lick",
				fr: "Léchouille"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Energy Conversion",
				fr: "Conversion d'Énergie"
			},
			effect: {
				en: "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.",
				fr: "Placez jusqu'à 2 cartes Énergie de votre pile de défausse dans votre main. Fantominus s'inflige 10 dégâts."
			},

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Un Pokémon mystérieux. Certains pensent qu'il vient d'une autre dimension, d'autres croient qu'il est formé de brouillard."
	}
}

export default card
