import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Drifblim",
		fr: "Grodrive",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		426,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Balloon Tackle",
				fr: "Charge Ballon",
			},
			effect: {
				en: "Drifblim does 20 damage to itself.",
				fr: "Grodrive s'inflige 20 dégâts.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Away",
				fr: "Envolée",
			},
			effect: {
				en: "Shuffle Drifblim and all cards attached to it back into your deck. Then, your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck. (You choose your new Active Pokémon first.)",
				fr: "Mélangez Grodrive et toutes les cartes qui lui sont attachées avec votre deck. Ensuite, votre adversaire mélange le Pokémon Défenseur et toutes les cartes qui lui sont attachées avec son deck. (Vous choisissez votre nouveau Pokémon Actif en premier.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
