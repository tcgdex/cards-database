import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bewitching Eyes",
				fr: "Yeux Ensorcelants",
			},
			effect: {
				en: "Choose a Supporter card from your opponent’s discard pile and use it as the effect of this attack.",
				fr: "Choisissez une carte Supporter de la pile de défausse de votre adversaire et utilisez-la en tant qu'effet de cette attaque.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Furtive Drop",
				fr: "Chute Furtive",
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Active Pokémon.",
				fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
			},

		},
	],


	retreat: 1,



}

export default card
