import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Skarmory FB",
		fr: "Airmure ",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		227,
	],
	hp: 80,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Silver Feather",
				fr: "Plume argentée",
			},
			effect: {
				en: "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
				fr: "Lors du prochain tour de votre adversaire, lorsque votre adversaire place un Pokémon de base de sa main sur son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Max",
				fr: "Métal max",
			},
			effect: {
				en: "Discard all Metal Energy attached to Skarmory FB. Flip a coin for each Energy card you discarded. This attack does 20 damage plus 40 more damage for each heads.",
				fr: "Défaussez toutes les Énergies Metal attachées à Airmure . Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 20 dégâts plus 40 dégâts supplémentaires pour chaque face.",
			},
			damage: 20,

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
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
