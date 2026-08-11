import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Registeel",
		'fr-fr': "Registeel",
		'es-es': "Registeel",
		'it-it': "Registeel",
		'pt-br': "Registeel",
		'de-de': "Registeel"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		379,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Turbo Arm",
				'fr-fr': "Bras Turbo",
				'es-es': "Turbobrazo",
				'it-it': "Turbobraccio",
				'pt-br': "Braço Turbo",
				'de-de': "Turboarm"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
				'en-us': "Iron Hand",
				'fr-fr': "Main de Fer",
				'es-es': "Mano Férrea",
				'it-it': "Mano Ferrea",
				'pt-br': "Mão Metálica",
				'de-de': "Eisenhand"
			},
			effect: {
				'en-us': "If Regice is on your Bench, heal 30 damage from this Pokémon.",
				'fr-fr': "Si Regice est sur votre Banc, soignez 30 dégâts à ce Pokémon.",
				'es-es': "Si Regice está en tu Banca, cura 30 puntos de daño a este Pokémon.",
				'it-it': "Se Regice è nella tua panchina, cura questo Pokémon da 30 danni.",
				'pt-br': "Se Regice estiver no seu Banco, cure 30 pontos de dano deste Pokémon.",
				'de-de': "Wenn sich Regice auf deiner Bank befindet, heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

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
		'en-us': "Tempered by pressure underground over tens of thousands of years, its body cannot be scratched.",
	},
}

export default card
