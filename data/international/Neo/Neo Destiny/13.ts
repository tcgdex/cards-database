import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Azumarill",
		'fr-fr': "Azumarill lumineux",
		'de-de': "Helles Azumarill"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marill",
		'fr-fr': "Marill"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Bubble",
				'fr-fr': "Écume",
				'de-de': "Bubble"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Jump",
				'fr-fr': "Saute bulle",
				'de-de': "Bubble Jump"
			},
			effect: {
				'en-us': "If you have any Benched Pokémon, flip a coin. If heads, take 2 Energy cards attached to Light Azumarill and attach them to 1 of your Benched Pokémon. Then return Light Azumarill and all cards attached to it to your hand.",
				'fr-fr': "Si vous avez des Pokémon sur votre Banc, lancez une pièce. Si c'est face, prenez 2 cartes Énergie attachées à Azumarill lumineux et attachez-les à l'un des Pokémon de votre Banc. Puis renvoyez Azumarill lumineux et toutes les cartes qui y sont attachées dans votre main.",
				'de-de': "If you have any Benched Pokémon, flip a coin. If heads, take 2 Energy cards attached to Light Azumarill and attach them to 1 of your Benched Pokémon. Then return Light Azumarill and all cards attached to it to your head."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It curls up its long ears when swimming to prevent water from entering them.",
		'fr-fr': "Il replie ses longues oreilles quand il nage pour éviter que l'eau y entre."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274665,
				tcgplayer: 86735
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274665,
				tcgplayer: 86735
			}
		}
	]
}

export default card
