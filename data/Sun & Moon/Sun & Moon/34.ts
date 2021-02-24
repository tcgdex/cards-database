import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Headlock",
				fr: "Prise de Tête",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires. Si c’est pile, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Guard Press",
				fr: "Pression de Garde",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 20 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 20 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
