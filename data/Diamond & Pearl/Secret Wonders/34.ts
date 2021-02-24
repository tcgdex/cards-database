import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Nidoking",
		fr: "Nidoking",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		34,
	],
	hp: 130,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Nidorino",
		fr: "Nidorino",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Rub",
				fr: "Friction empoisonnée",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. Before doing damage, you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Avant d'infliger des dégâts, vous pouvez échanger 1 des Pokémon Défenseurs avec 1 des Pokémon de Banc de votre adversaire. Le nouveau Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pride Attack",
				fr: "Attaque de fierté",
			},
			effect: {
				en: "Flip a coin for each Nidoqueen on your Bench. This attack does 60 damage plus 30 more damage for each heads.",
				fr: "Lancez une pièce pour chaque Nidoqueen sur votre Banc. Cette attaque inflige 60 dégâts plus 30 dégâts supplémentaires pour chaque face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
