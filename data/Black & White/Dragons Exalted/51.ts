import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
		es: "Drifblim",
		it: "Drifblim",
		pt: "Drifblim",
		de: "Drifzepeli"
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shadow Steal",
				fr: "Vol d'Ombre",
			},
			effect: {
				en: "Does 50 damage times the number of Special Energy cards in your opponent's discard pile.",
				fr: "Inflige 50 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Plentiful Placement",
				fr: "Placement Multiple",
			},
			effect: {
				en: "Put 4 damage counters on 1 of your opponent's Pokémon.",
				fr: "Placez 4 marqueurs de dégâts sur 1 des Pokémon de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
