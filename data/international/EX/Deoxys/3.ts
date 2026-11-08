import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'de-de': "Kapilz"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		286,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Leaf Poison",
				'fr-fr': "Feuille-poison",
				'de-de': "Leaf Poison"
			},
			effect: {
				'en-us': "If Breloom has any Grass Energy attached to it, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Si Chapignon possède des Énergies , le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "If Breloom has any  Energy attached to it, the Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hustle Punch",
				'fr-fr': "Pousse-poing",
				'de-de': "Hustle Punch"
			},
			effect: {
				'en-us': "During your next turn, Hustle Punch attack's base damage is 50 instead of 70.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Pousse-poing sont de 50 au lieu de 70.",
				'de-de': "During your next turn, Hustle Punch attack's base damage is 50 instead of 70."
			},
			damage: "70-",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83955,
				cardmarket: 276406
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 83955,
				cardmarket: 276406
			},
		},
	],

}

export default card
