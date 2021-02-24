import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Zeraora",
		fr: "Zeraora",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		807,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Crushing Claw",
				fr: "Griffe Écrasante",
			},
			effect: {
				en: "Discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Discharge",
				fr: "Coup d’Jus",
			},
			effect: {
				en: "Discard all Lightning Energy from this Pokémon. This attack does 50 damage for each card you discarded in this way.",
				fr: "Défaussez toute l’Énergie Lightning de ce Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
