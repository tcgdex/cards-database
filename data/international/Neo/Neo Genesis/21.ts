import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'de-de': "Donphan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Flail"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Donphan.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Donphan.",
				'de-de': "Does 10 damage times the number of damage counters on Donphan"
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Rapid Spin",
				'fr-fr': "Tour rapide",
				'de-de': "Rapid Spin"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange avec son Pokémon Actif, ensuite, si vous avez des Pokémon sur votre Banc, vous choisissez l'un d'eux et l'échangez avec votre Pokémon Actif. (Infligez les dégâts avant d'échanger les Pokémon.)",
				'de-de': "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 3,


	description: {
		'en-us': "It has sharp, hard tusks and a rugged hide. Its tackle is strong enough to knock down a house.",
		'fr-fr': "Il possède des défenses aiguisées et une peau épaisse. Ses charges sont suffisamment puissantes pour abattre une maison."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274421,
				tcgplayer: 84872
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274421,
				tcgplayer: 84872
			}
		}
	]
}

export default card
