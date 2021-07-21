import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		es: "Masquerain",
		it: "Masquerain",
		pt: "Masquerain",
		de: "Maskeregen"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Struggle Bug",
				fr: "Survinsecte",
				es: "Estoicismo",
				it: "Entomoblocco",
				pt: "Ira de Inseto",
				de: "Käfertrutz"
			},
			effect: {
				en: "Move an Energy from your opponent’s Active Pokémon to 1 of their Benched Pokémon.",
				fr: "Déplacez une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
				es: "Mueve 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				it: "Sposta un’Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				pt: "Mova 1 Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele(a).",
				de: "Verschiebe 1 Energie vom Aktiven Pokémon deines Gegners auf 1 Pokémon auf seiner Bank."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
