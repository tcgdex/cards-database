import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Registeel",
		fr: "Registeel",
		es: "Registeel",
		it: "Registeel",
		pt: "Registeel",
		de: "Registeel"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
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
				en: "Turbo Arm",
				fr: "Bras Turbo",
				es: "Turbobrazo",
				it: "Turbobraccio",
				pt: "Braço Turbo",
				de: "Turboarm"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
				en: "Iron Hand",
				fr: "Main de Fer",
				es: "Mano Férrea",
				it: "Mano Ferrea",
				pt: "Mão Metálica",
				de: "Eisenhand"
			},
			effect: {
				en: "If Regice is on your Bench, heal 30 damage from this Pokémon.",
				fr: "Si Regice est sur votre Banc, soignez 30 dégâts à ce Pokémon.",
				es: "Si Regice está en tu Banca, cura 30 puntos de daño a este Pokémon.",
				it: "Se Regice è nella tua panchina, cura questo Pokémon da 30 danni.",
				pt: "Se Regice estiver no seu Banco, cure 30 pontos de dano deste Pokémon.",
				de: "Wenn sich Regice auf deiner Bank befindet, heile 30 Schadenspunkte bei diesem Pokémon."
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



}

export default card
