import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Toxapex",
		fr: "Prédastérie"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Mareanie",
		fr: "Vorastérie"
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recover",
				fr: "Soin"
			},
			effect: {
				en: "Discard an Energy from this Pokémon and heal all damage from it.",
				fr: "Défaussez une Énergie de ce Pokémon, puis soignez tous les dégâts de ce Pokémon."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poisonous Whip",
				fr: "Fouet Empoisonné"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
