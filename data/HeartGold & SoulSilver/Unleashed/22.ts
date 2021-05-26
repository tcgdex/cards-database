import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 90,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Bebop Punch",
				fr: "Rythmofrappe",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. Flip a coin until you get tails. This attack does 50 damage times the number of heads to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez l'un des Pokémon de votre adversaire. Lancez une pièce jusqu'à ce qu'elle tombe sur pile. Cette attaque inflige à ce Pokémon 50 dégâts multipliés par le nombre de côtés face. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
