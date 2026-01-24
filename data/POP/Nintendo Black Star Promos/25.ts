import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 120,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sand Pit",
				fr: "Bac à sable"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragonbreath",
				fr: "Dracosouffle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, cette attaque est sans effet."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
