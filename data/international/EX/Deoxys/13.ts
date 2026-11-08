import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Ninjask",
		'fr-fr': "Ninjask",
		'de-de': "Ninjask"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		291,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Fast Protection",
				'fr-fr': "Protection rapide",
				'de-de': "Fast Protection"
			},
			effect: {
				'en-us': "Prevent all effects, including damage, done to Ninjask by your opponent's attacks from his or her Basic Pokémon.",
				'fr-fr': "Prévenez tous les effets d'une attaque, dégâts inclus, infligés à Ninjask par les attaques du Pokémon de base de votre adversaire.",
				'de-de': "Prevent all effects, including damage, done to Ninjask by your opponent´s attacks from his or her Basic Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swords Dance",
				'fr-fr': "Danse-lames",
				'de-de': "Swords Dance"
			},
			effect: {
				'en-us': "During your next turn, Ninjask's Slash attack's base damage is 80.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Tranche de Ninjask sont de 80.",
				'de-de': "During your next turn, Ninjask´s Slash attack´s base damage is 80."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
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


	retreat: 0,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87785,
				cardmarket: 276416
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87785,
				cardmarket: 276416
			},
		},
	],

}

export default card
