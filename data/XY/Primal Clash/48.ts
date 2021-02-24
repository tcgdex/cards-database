import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Walrein",
		fr: "Kaimorse",
	},
	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		365,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Sealeo",
		fr: "Phogleur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Knock Over",
				fr: "Culbute",
			},
			effect: {
				en: "You may discard any Stadium card in play.",
				fr: "Vous pouvez défausser toute carte Stade en jeu.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Splash",
				fr: "Trempette Glacée",
			},
			effect: {
				en: "If your opponent's Active Pokémon is a Fighting Pokémon, this attack does 70 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Fighting, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
