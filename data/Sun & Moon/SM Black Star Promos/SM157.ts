import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
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
				en: "Pika Shield",
				fr: "Pika Bouclier",
				es: "Escudo Pika",
				it: "Pika-Difesa",
				pt: "Escudo Pikachu",
				de: "Pika-Schutz"
			},
			effect: {
				en: "This Pokémon can’t be Paralyzed.",
				fr: "Ce Pokémon ne peut pas être Paralysé.",
				es: "Este Pokémon no puede pasar a estar Paralizado.",
				it: "Questo Pokémon non può venire paralizzato.",
				pt: "Este Pokémon não pode ser Paralisado.",
				de: "Dieses Pokémon kann nicht paralysiert werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
				es: "Impacto Estático",
				it: "Shock statico",
				pt: "Choque de Estática",
				de: "Statischer Schock"
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



}

export default card
