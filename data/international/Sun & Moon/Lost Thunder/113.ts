import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'es-es': "Hitmontop",
		'it-it': "Hitmontop",
		'pt-br': "Hitmontop",
		'de-de': "Kapoera"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rapid Spin",
				'fr-fr': "Tour Rapide",
				'es-es': "Giro Rápido",
				'it-it': "Rapigiro",
				'pt-br': "Giro Rápido",
				'de-de': "Turbodreher"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca. Si lo haces, tu rival cambia su Pokémon Activo por 1 de sus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, il tuo avversario scambia il suo Pokémon attivo con uno della sua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, o seu oponente troca o próprio Pokémon Ativo por 1 dos Pokémon no Banco dele(a).",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, tauscht dein Gegner sein Aktives Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Triple Kick",
				'fr-fr': "Triple Pied",
				'es-es': "Triple Patada",
				'it-it': "Triplocalcio",
				'pt-br': "Chute Triplo",
				'de-de': "Dreifachkick"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "If you are enchanted by its smooth, dance-like kicks, you may get a closer experience with one than you'd like.",
	},

	thirdParty: {
		cardmarket: 365750,
		tcgplayer: 178926
	}
}

export default card
