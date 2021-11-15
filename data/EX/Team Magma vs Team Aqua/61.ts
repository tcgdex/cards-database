import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Baltoy",
		fr: "Balbuto de Team Magma"
	},
	illustrator: "Atsuko Ujiie",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		343,
	],
	hp: 50,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Night Attack",
				fr: "Attaque nocturne"
			},
			effect: {
				en: "Put 1 damage counter on 1 of your opponent's Pokémon.",
				fr: "Placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Attack",
				fr: "Attaque tournante"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
