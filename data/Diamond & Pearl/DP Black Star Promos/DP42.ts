import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Carnivine G",
		fr: "Vortente"
	},
	illustrator: "Makoto Imai",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		455,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Whip",
				fr: "Mégafouet"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Energy attached to Carnivine  to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts pour chaque Énergie attachée à Vortente . (Vous ne pouvez pas appliquer la Faiblesse et Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Grass Knot",
				fr: "Noeud Herbe"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Colorless dans le Coût de retraite du Pokémon Défenseur (après application des effets sur le Coût de retraite)."
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],




}

export default card
