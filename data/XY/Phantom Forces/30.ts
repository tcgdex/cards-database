import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		695,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Parabolic Spark",
				fr: "Parabétincelle",
			},
			effect: {
				en: "Discard as many Lightning Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded.",
				fr: "Défaussez autant d'Énergies Lightning attachées à vos Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: "30×",

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
