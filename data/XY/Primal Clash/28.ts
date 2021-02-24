import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Blaziken",
		fr: "Braségali",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Spreading Flames",
				fr: "Flammes Rampantes",
			},
			effect: {
				en: "Attach 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
				fr: "Attachez 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Heat Blow",
				fr: "Coup Explosif",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 100,

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
