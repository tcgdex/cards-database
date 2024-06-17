import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [214],
	name: {
		en: "Heracross",
		fr: "Scarhino",
		es: "Heracross",
		it: "Heracross",
		pt: "Heracross",
		de: "Skaraborn"
	},

	illustrator: "otumami",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Recul",
				es: "Oprimir",
				it: "Spintonare",
				pt: "Rebaixar",
				de: "Runterdrücken"
			},
			effect: {
				en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
				es: "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				it: "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				pt: "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				de: "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Superpowered Horns",
				fr: "Cornes Surpuissantes",
				es: "Cuernos Superpoderosos",
				it: "Corna Superpotenziate",
				pt: "Chifres Superpoderosos",
				de: "Superstarke Hörner"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Grass"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it's not that good at flying."
	}
}

export default card
