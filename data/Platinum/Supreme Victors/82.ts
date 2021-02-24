import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 70,
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
				en: "Discharge",
				fr: "Coup d'Jus",
			},
			effect: {
				en: "Discard all Lightning Energy attached to Rotom. Flip a coin for each Energy card you discarded. This attack does 40 damage times the number of heads.",
				fr: "Défaussez toutes les Énergies Lightning attachées à Motisma. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 40 dégâts multipliés par le nombre de faces.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Uproar",
				fr: "Brouhaha",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
