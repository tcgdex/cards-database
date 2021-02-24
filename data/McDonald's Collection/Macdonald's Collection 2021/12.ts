import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		391,
	],
	hp: 80,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Chimchar",
		fr: "Ouisticram",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Super Singe",
				fr: "Super Roussi",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 20,

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
