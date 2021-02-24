import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Spinarak",
		fr: "Mimigal",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		167,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spider Scram",
				fr: "Détalage Arachnéen",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned. Put this Pokémon and all cards attached to it in the Lost Zone.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sting",
				fr: "Dard",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
