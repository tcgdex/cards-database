import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Carracosta",
		fr: "Mégapagos",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		565,
	],
	hp: 160,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Tirtouga",
		fr: "Carapagos",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Ancient Custom",
				fr: "Coûtume Antique",
			},
			effect: {
				en: "Pokémon Tool cards attached to your opponent's Pokémon have no effect.",
				fr: "Les cartes Outil Pokémon attachées aux Pokémon de votre adversaire n’ont aucun effet.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Impact",
				fr: "Impact Aqua",
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
