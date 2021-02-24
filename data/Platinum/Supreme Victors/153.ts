import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		fr: "Yanma",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Sonicboom",
			},
			effect: {
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Relais",
			},
			effect: {
				fr: "Vous pouvez échanger Yanma avec 1 de vos Pokémon de Banc. Déplacez alors autant de cartes Énergie attachées à Yanma que vous le voulez sur le nouveau Pokémon Actif.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
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
