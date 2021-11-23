import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Probopass G",
		fr: "Tarinorme"
	},
	illustrator: "Ryota Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Nose Unit",
				fr: "Bout du nez"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent's Pokémon that has any Poké-Bodies. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire possédant des Poké-Bodies. (Vous ne pouvez pas appliquer la Faiblesse et Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Loud Snort",
				fr: "Gros grognement"
			},
			effect: {
				en: "Probopass 's Retreat Cost is 0 until the end of your next turn.",
				fr: "Le Coût de retraite de Tarinorme  est de 0 jusqu'à la fin de votre prochain tour."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
