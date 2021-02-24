import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Nine Temptations",
				fr: "Neuf Tentations",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard 2 Fire Energy cards from your hand. If you do, switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser 2 cartes Énergie Fire de votre main. Dans ce cas, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de Flammes",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
