import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Araquanid",
		fr: "Tarenbulle",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		752,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Dewpider",
		fr: "Araqua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tangle Drag",
				fr: "Lasso Piège",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sticky Web",
				fr: "Toile Gluante",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks cost Colorless more, and its Retreat Cost is Colorless more.",
				fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur coûtent Colorless de plus et son Coût de Retraite augmente de Colorless.",
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

	retreat: 1,



}

export default card
