import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Breloom",
		fr: "Chapignon",
		de: "Kapilz"
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
		en: "Shroomish",
		fr: "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Leaf Poison",
				fr: "Feuille-poison",
				de: "Leaf Poison"
			},
			effect: {
				en: "If Breloom has any Grass Energy attached to it, the Defending Pokémon is now Poisoned.",
				fr: "Si Chapignon possède des Énergies , le Pokémon Défenseur est maintenant Empoisonné.",
				de: "If Breloom has any  Energy attached to it, the Defending Pokémon is now Poisoned."
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
				en: "Hustle Punch",
				fr: "Pousse-poing",
				de: "Hustle Punch"
			},
			effect: {
				en: "During your next turn, Hustle Punch attack's base damage is 50 instead of 70.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Pousse-poing sont de 50 au lieu de 70.",
				de: "During your next turn, Hustle Punch attack's base damage is 50 instead of 70."
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

	thirdParty: {
		tcgplayer: 83955,
		cardmarket: 276406
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
