import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Litwick",
		fr: "Funécire",
	},
	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		607,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
			},
			effect: {
				en: "Put 1 damage counter on your opponent's Active Pokémon.",
				fr: "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
