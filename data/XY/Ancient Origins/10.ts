import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Vespiquen",
		fr: "Apireine",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		416,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Combee",
		fr: "Apitrini",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Intelligence Gathering",
				fr: "Collecte de Renseignements",
			},
			effect: {
				en: "You may draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu'à ce que vous ayez 6 cartes en main.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bee Revenge",
				fr: "Abeille Vindicative",
			},
			effect: {
				en: "This attack does 10 more damage for each Pokémon in your discard pile.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
