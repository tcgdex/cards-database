import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Xerneas-EX",
		fr: "Yveltal-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		716,
	],
	hp: 170,
	types: [
		"Fairy",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Break Through",
				fr: "Balle Maléfique",
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d'Énergies attachées aux Pokémon Actifs.",
			},
			damage: 60,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "X Blast",
				fr: "Cyclone Y",
			},
			effect: {
				en: "This Pokémon can't use X Blast during your next turn.",
				fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			},
			damage: 140,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
