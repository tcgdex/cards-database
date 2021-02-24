import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},
	illustrator: "Megumi Higuchi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 120,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flame Cloak",
				fr: "Manteau de Feu",
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie Feu de votre pile de défausse à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Mane",
				fr: "Crinière de Feu",
			},

			damage: 70,

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
