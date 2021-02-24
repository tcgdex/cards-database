import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		347,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "RESTORED",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Restored Barrier",
				fr: "Bouclier Recréé",
			},
			effect: {
				en: "Each of your Restored Pokémon has no Weakness.",
				fr: "Aucun de vos Pokémon Recréés n’a de Faiblesse.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
