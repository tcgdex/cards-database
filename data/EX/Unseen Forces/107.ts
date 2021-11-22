import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Politoed ex",
		fr: "Tarpaud ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		186,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Poliwhirl",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Upward Lick",
				fr: "Grosse lèche"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If that Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Si ce Pokémon est un Pokémon Évolué de niveau 2, cette attaque inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch and Run",
				fr: "Frapper et partir en courant"
			},
			effect: {
				en: "Switch Politoed ex with 1 of your Benched Pokémon.",
				fr: "Échangez Tarpaud ex avec 1 des Pokémon de votre Banc."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutir"
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon and Politoed ex. If the Defending Pokémon has fewer remaining HP than Politoed ex's, this attack does 120 damage instead.",
				fr: "Avant d'infliger des dégâts, comptabilisez les Points de vie restants du Pokémon Défenseur et de Tarpaud ex. S'il reste au Pokémon Défenseur moins de Points de vie que Tarpaud ex, cette attaque inflige 120 dégâts."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
