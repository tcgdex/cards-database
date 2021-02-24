import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Gabite",
		fr: "Carmache",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		444,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Sand Tomb",
				fr: "Tourbi-Sable",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
