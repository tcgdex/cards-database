import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Light Ninetales",
		'fr-fr': "Feunard lumineux",
		'de-de': "Helles Vulnona"
	},

	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		38,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire"],

			name: {
				'en-us': "Guiding Flame",
				'fr-fr': "Flambeau",
				'de-de': "Fire Blast"
			},

			effect: {
				'en-us': "Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can't use this attack if your Bench is full.)",
				'fr-fr': "Placez une carte Bébé Pokémon ou Pokémon de base de votre pile de défausse sur votre Banc. (Vous ne pouvez pas utiliser cette attaque si votre Banc est plein.)",
				'de-de': "Discard a  Energy card attached to Light Ninetales in order to use this attack."
			},

			damage: 50
		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Blast",
				'fr-fr': "Déflagration",
				'de-de': "Fire Blast"
			},
			effect: {
				'en-us': "Discard a Energy card attached to Light Ninetales in order to use this attack.",
				'fr-fr': "Défaussez-vous d'une carte Énergie  attachée à Feunard lumineux pour utiliser cette attaque.",
				'de-de': "Discard a  Energy card attached to Light Ninetales in order to use this attack."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is said that each of its nine tails contains a different magical power.",
		'fr-fr': "On dit que chacune de ses neuf queues renferme un pouvoir magique différent."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274702,
				tcgplayer: 86746
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274702,
				tcgplayer: 86746
			}
		}
	]
}

export default card
