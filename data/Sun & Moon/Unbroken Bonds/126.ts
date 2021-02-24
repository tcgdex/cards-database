import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 130,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Low Sweep",
				fr: "Balayette",
			},

			damage: 40,

		},
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Rush Up",
				fr: "En Toute Hâte",
			},
			effect: {
				en: "If you attached a Pokémon Tool card from your hand to this Pokémon during this turn, this attack does 70 more damage.",
				fr: "Si vous avez attaché une carte Outil Pokémon de votre main à ce Pokémon pendant ce tour, cette attaque inflige 70 dégâts supplémentaires.",
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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
