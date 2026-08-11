import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Pika Shield",
				'fr-fr': "Pika Bouclier",
				'es-es': "Escudo Pika",
				'it-it': "Pika-Difesa",
				'pt-br': "Escudo Pikachu",
				'de-de': "Pika-Schutz"
			},
			effect: {
				'en-us': "This Pokémon can’t be Paralyzed.",
				'fr-fr': "Ce Pokémon ne peut pas être Paralysé.",
				'es-es': "Este Pokémon no puede pasar a estar Paralizado.",
				'it-it': "Questo Pokémon non può venire paralizzato.",
				'pt-br': "Este Pokémon não pode ser Paralisado.",
				'de-de': "Dieses Pokémon kann nicht paralysiert werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Static Shock",
				'fr-fr': "Choc Statique",
				'es-es': "Impacto Estático",
				'it-it': "Shock statico",
				'pt-br': "Choque de Estática",
				'de-de': "Statischer Schock"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It's in its nature to store electricity. It feel stressed now and then if it's unable to fully discharge the electricity.",
	},
}

export default card
