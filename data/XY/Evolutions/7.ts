import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Swarming Sting",
				fr: "Essaim Piqûre",
			},
			effect: {
				en: "This attack does 40 damage times the number of Beedrill you have in play to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts, multipliés par le nombre de Dardargnan que vous avez en jeu, à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
