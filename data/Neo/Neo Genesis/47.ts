import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Quilava",
		fr: "Feurisson"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		156,
	],

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Cyndaquil",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque ne fait rien."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Char",
				fr: "Charbon"
			},
			effect: {
				en: "If the Defending Pokémon doesn't have a Char counter on it, flip a coin. If heads, put a Char counter on it. A Char counter requires your opponent to flip a coin after every turn. If tails, put 2 damage counters on the Pokémon with that Char counter. (Char counters stay on the Pokémon as long as it's in play.)",
				fr: "Si le Pokémon Défenseur n'a pas de marqueur Charbon sur lui, lancez une pièce. Si c'est face, placez un marqueur Charbon sur lui. Un marqueur Charbon nécessite que votre adversaire lance une pièce à la fin de chaque tour. Si c'est pile, placez 2 marqueurs de dégâts sur le Pokémon qui possède ce marqueur Charbon. (Les marqueurs Charbon restent sur le Pokémon aussi longtemps qu'il est en jeu.)"
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	description: {
		fr: "Prenez garde s'il vous tourne le dos pendant un combat : cela signifie qu'il va attaquer avec le feu de son dos."
	}
}

export default card
