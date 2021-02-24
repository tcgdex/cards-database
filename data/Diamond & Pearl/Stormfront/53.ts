import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Bagon",
		fr: "Bagon",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		371,
	],
	hp: 50,
	types: [
		"Colorless",
	],
	evolveFrom: {
		fr: "Draby",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scary Face",
				fr: "Grimace",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
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
