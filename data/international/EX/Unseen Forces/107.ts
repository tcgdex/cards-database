import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Politoed ex",
		'fr-fr': "Tarpaud ex",
		'de-de': "Quaxo ex"
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
		'en-us': "Poliwhirl",
		'fr-fr': "Tetarte"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Upward Lick",
				'fr-fr': "Grosse lèche",
				'de-de': "Upward Lick"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If that Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. Si ce Pokémon est un Pokémon Évolué de niveau 2, cette attaque inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. If that Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage more instead. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punch and Run",
				'fr-fr': "Frapper et partir en courant",
				'de-de': "Punch and Run"
			},
			effect: {
				'en-us': "Switch Politoed ex with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Tarpaud ex avec 1 des Pokémon de votre Banc.",
				'de-de': "Switch Politoed ex with 1 of your Benched Pokémon."
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
				'en-us': "Swallow Up",
				'fr-fr': "Engloutir",
				'de-de': "Swallow Up"
			},
			effect: {
				'en-us': "Before doing damage, count the remaining HP of the Defending Pokémon and Politoed ex. If the Defending Pokémon has fewer remaining HP than Politoed ex's, this attack does 120 damage instead.",
				'fr-fr': "Avant d'infliger des dégâts, comptabilisez les Points de vie restants du Pokémon Défenseur et de Tarpaud ex. S'il reste au Pokémon Défenseur moins de Points de vie que Tarpaud ex, cette attaque inflige 120 dégâts.",
				'de-de': "Before doing damage, count the remaining HP of the Defending Pokémon and Politoed ex. If the Defending Pokémon has fewer remaining HP than Politoed ex's, this attack does 120 damage instead."
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

	
	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88252,
				cardmarket: 276753
			},
		},
	],
}

export default card
