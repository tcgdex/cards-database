import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		311,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Draw for Everybody",
				fr: "Pioche Pour Tous",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a card for each Benched Pokémon (both yours and your opponent's).",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque Pokémon de Banc (les vôtres et ceux de votre adversaire).",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
