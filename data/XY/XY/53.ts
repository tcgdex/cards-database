import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Scolipede",
		fr: "Brutapode",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		545,
	],
	hp: 150,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Whirlipede",
		fr: "Scobolide",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Random Peck",
				fr: "Coup d'Bec au Pif",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de Poison",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. That Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
