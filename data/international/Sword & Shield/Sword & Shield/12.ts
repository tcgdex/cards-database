import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Thwackey",
		'fr-fr': "Badabouin",
		'es-es': "Thwackey",
		'it-it': "Thwackey",
		'pt-br': "Thwackey",
		'de-de': "Chimstix"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grookey",
		'fr-fr': "Ouistempo",
		'es-es': "Grookey",
		'it-it': "Grookey",
		'pt-br': "Grookey",
		'de-de': "Chimpep"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Taunt",
				'fr-fr': "Provoc",
				'es-es': "Mofa",
				'it-it': "Provocazione",
				'pt-br': "Insulto",
				'de-de': "Verhöhner"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire contre son Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Double Hit",
				'fr-fr': "Coup Double",
				'es-es': "Doble Golpe",
				'it-it': "Doppiosmash",
				'pt-br': "Golpe Duplo",
				'de-de': "Doppelschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 60 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 60 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 60 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 60 Schadenspunkte pro Kopf zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "The faster a Thwackey can beat out a rhythm with its two sticks, the more respect it wins from its peers."
	},

	dexId: [811],

	thirdParty: {
		cardmarket: 436234,
		tcgplayer: 208291
	}
}

export default card
