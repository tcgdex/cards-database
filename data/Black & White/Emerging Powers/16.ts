import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Sawsbuck",
		fr: "Haydaim",
		es: "Sawsbuck",
		it: "Sawsbuck",
		pt: "Sawsbuck",
		de: "Kronjuwild"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		586,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Deerling",
		fr: "Vivaldaim",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Renversement",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 279981
	}
}

export default card
