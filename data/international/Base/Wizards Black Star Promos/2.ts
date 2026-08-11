import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Electabuzz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		125,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Light Screen",
				'fr-fr': "Écran de lumière"
			},
			effect: {
				'en-us': "Whenever an attack does damage to Electabuzz (after applying Weakness and Resistance) during your opponent's next turn, that attack only does half the damage to Electabuzz (rounded down to the nearest 10). (Any other effects still happen.)",
				'fr-fr': "Dès qu'une attaque provoque des dégâts à Electabuzz (après application de la faiblesse et de la résistance), pendant le prochain tour de votre adversaire, cette attaque ne produit que la moitié des dégâts à Electabuzz (arrondis à la dizaine la plus proche). (Tout autre effet ou attaque est toujours valide.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Attaque rapide"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires ; si c'est pile, cette attaque inflige 10 dégâts."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "A wild Pokémon with a short temper. It is able to distinguish colors, and likes the color red.",
		'fr-fr': "Un Pokémon sauvage au mauvais caractère. Capable de reconnaître les couleurs et apprécie la couleur rouge."
	},

	variants: [
		{
			type: "normal",
			stamp: ["1st-movie-inverted"]
		},
		{
			type: "normal",
			stamp: ["1st-movie"],
			thirdParty: {
				tcgplayer: 85107
			},
		}
	]
}

export default card
