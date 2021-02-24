import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		628,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush",
				fr: "Embuscade",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Drop",
				fr: "Chute Libre",
			},
			effect: {
				en: "This attack does 120 damage minus 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 120 dégâts moins 20 dégâts pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
