import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornèbre",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		198,
	],
	hp: 50,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Pierre Nut",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Cornèbre peut évoluer lors du tour où il est joué.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Feinte",
			},
			effect: {
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
