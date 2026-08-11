import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'es-es': "Escavalier",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'de-de': "Cavalanzas"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 90,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Joust",
				'fr-fr': "Joute"
			},
			effect: {
				'en-us': "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez une carte Outil Pokémon au Pokémon Défenseur."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Cavalry Lance",
				'fr-fr': "Lance de Chevalier"
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse."
			},
			damage: 70,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "They fly around at high speed, striking with their pointed spears. Even when in trouble, they face opponents bravely.",
	},

	thirdParty: {
		cardmarket: 280402,
		tcgplayer: 85314
	}
}

export default card
