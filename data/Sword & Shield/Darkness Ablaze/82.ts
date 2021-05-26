import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Sinistea",
		fr: "Théffroi"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 30,
	types: [
		"Psychic",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Furtive Drop",
				fr: "Chute Furtive"
			},
			effect: {
				en: "Put 2 damage counters on your opponent’s Active Pokémon.",
				fr: "Placez 2 marqueurs de dégâts sur le Pokémon Actif de votre adversaire."
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
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
