import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		425,
	],

	hp: 60,

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
				en: "Blowing Wind",
				fr: "Vent violent",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 of your Benched Pokémon and all cards attached to on top of your deck. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, placez 1 de vos Pokémon de Banc et toutes les cartes qui lui sont attachées au dessus de votre deck. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Ominous Wind",
				fr: "Vent Mauvais",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused and can't retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		fr: "Un Pokémon né de l'esprit des gens et des Pokémon. Il aime les saisons chaudes et humides."
	}
}

export default card
