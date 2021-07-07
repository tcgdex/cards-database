import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Venomoth",
		fr: "Aéromite",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
		fr: "Mimitoss",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Dizzying Wind",
				fr: "Vent Fou",
			},
			effect: {
				en: "Whenever your opponent plays a Trainer card from his or her hand during his or her next turn, your opponent flips a coin. If tails, that card has no effect. (Your opponent still discards that card.)",
				fr: "Chaque fois que votre adversaire joue une carte Dresseur de sa main pendant son prochain tour, votre adversaire lance une pièce. Si c'est pile, la carte Dresseur n'a aucun effet. (Votre adversaire défausse la carte.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Noxious Scales",
				fr: "Écailles Nocives",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},
			damage: 50,

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
