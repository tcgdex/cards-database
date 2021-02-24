import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		603,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Tynamo",
		fr: "Anchwatt",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Small Appetite",
				fr: "Petit Appétit",
			},
			effect: {
				en: "If your opponent's Active Pokémon's maximum HP is 100 or more, this attack does nothing.",
				fr: "Si les PV maximum du Pokémon Actif de votre adversaire sont de 100 ou plus, cette attaque ne fait rien.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
