import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		de: "Impoleon"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		395,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Knock Off",
				fr: "Sabotage",
				de: "Knock Off"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking and discard it.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
				de: "Choose 1 card from your opponent's hand without looking and discard it."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jet Smash",
				fr: "Éclat'jet",
				de: "Jet Smash"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't use Jet Smash during your next turn.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 70 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Pingoléon ne peut pas utiliser Écras'jet lors de votre prochain tour.",
				de: "Choose 1 of your opponent's Pokémon. This attack does 70 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Empoleon can't use Jet Smash during your next turn."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
