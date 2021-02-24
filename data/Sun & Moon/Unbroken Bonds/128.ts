import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Meltan",
		fr: "Meltan",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steel Melt",
				fr: "Fonte d’Acier",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Metal Pokémon, this attack does 40 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: 10,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
