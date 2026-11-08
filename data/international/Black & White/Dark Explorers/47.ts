import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Eelektross",
		'fr-fr': "Ohmassacre",
		'es-es': "Eelektross",
		'it-it': "Eelektross",
		'pt-br': "Eelektross",
		'de-de': "Zapplarang"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		604,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Eelektrik",
		'fr-fr': "Lampéroie"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Suction Heal",
				'fr-fr': "Succion Guérisseuse"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur."
			},
			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slurp Shakedown",
				'fr-fr': "Aspiration Brutale"
			},
			effect: {
				'en-us': "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. This attack does 60 damage to the new Defending Pokémon.",
				'fr-fr': "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire. Cette attaque inflige 60 dégâts au nouveau Pokémon Défenseur."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "With their sucker mouths, they suck in prey. Then they use their fangs to shock the prey with electricity.",
	},

	thirdParty: {
		cardmarket: 280375,
		tcgplayer: 85071
	}
}

export default card
