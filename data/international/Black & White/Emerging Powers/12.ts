import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Encore",
				'fr-fr': "Encore",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. During your opponent's next turn, that Pokémon can use only that attack.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Pendant le prochain tour de votre adversaire, le Pokémon ciblé ne peut utiliser que l'attaque choisie.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "U-turn",
				'fr-fr': "Demi-Tour",
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Riding whirlwinds, they appear. These Pokémon sneak through gaps into houses and cause all sorts of mischief.",
	},

	thirdParty: {
		cardmarket: 279976,
		tcgplayer: 90568
	}
}

export default card
