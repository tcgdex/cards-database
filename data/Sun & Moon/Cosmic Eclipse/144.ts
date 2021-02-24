import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		35,
	],
	hp: 50,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doll Swap",
				fr: "Échange Poupées",
			},
			effect: {
				en: "Put this Pokémon and all cards attached to it into your hand. If you do, you may play Lillie's Poké Doll from your hand as your new Active Pokémon.",
				fr: "Placez ce Pokémon et toutes les cartes qui lui sont attachées dans votre main. Dans ce cas, vous pouvez jouer Poké Poupée de Lilie de votre main comme nouveau Pokémon Actif.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
