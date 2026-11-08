import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Druddigon",
		'fr-fr': "Drakkarmin",
		'es-es': "Druddigon",
		'it-it': "Druddigon",
		'pt-br': "Druddigon",
		'de-de': "Shardrago"
	},

	illustrator: "hatachu",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		621,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drag Off",
				'fr-fr': "Traîne",
				'es-es': "Jalón",
				'it-it': "Trascinato Via",
				'pt-br': "Arrastar para Fora",
				'de-de': "Wegzerren"
			},
			effect: {
				'en-us': "Switch 1 of your opponent’s Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				'fr-fr': "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 30 puntos de daño al nuevo Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 30 danni al nuovo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a). Este ataque causa 30 pontos de dano ao novo Pokémon Ativo.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Diese Attacke fügt dem neuen Aktiven Pokémon 30 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Tail",
				'fr-fr': "Draco-Queue",
				'es-es': "Cola Dragón",
				'it-it': "Codadrago",
				'pt-br': "Cauda do Dragão",
				'de-de': "Drachenrute"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 100 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
			},
			damage: "100×",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The red skin on its face is harder than rock. In narrow caves, it squares off against its enemies and charges face-first right into them.",
	},

	thirdParty: {
		cardmarket: 388577,
		tcgplayer: 195155
	}
}

export default card
