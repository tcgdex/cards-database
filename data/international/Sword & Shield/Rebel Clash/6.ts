import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [214],

	name: {
		'en-us': "Heracross",
		'fr-fr': "Scarhino",
		'es-es': "Heracross",
		'it-it': "Heracross",
		'pt-br': "Heracross",
		'de-de': "Skaraborn"
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
				'en-us': "Push Down",
				'fr-fr': "Recul",
				'es-es': "Oprimir",
				'it-it': "Spintonare",
				'pt-br': "Rebaixar",
				'de-de': "Runterdrücken"
			},
			effect: {
				'en-us': "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Votre adversaire échange son Pokémon Actif contre l'un de ses Pokémon de Banc.",
				'es-es': "Tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Dein Gegner tauscht sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
				'en-us': "Superpowered Horns",
				'fr-fr': "Cornes Surpuissantes",
				'es-es': "Cuernos Superpoderosos",
				'it-it': "Corna Superpotenziate",
				'pt-br': "Chifres Superpoderosos",
				'de-de': "Superstarke Hörner"
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


	stage: "Basic",

	description: {
		'en-us': "It roams through forests searching for sweet nectar. Although it boasts fantastic physical strength, it's not that good at flying."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457408,
				tcgplayer: 213076
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457408,
				tcgplayer: 213076
			}
		},
	],
}

export default card
