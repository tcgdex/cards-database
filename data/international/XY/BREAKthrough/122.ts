import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'es-es': "Ursaring",
		'it-it': "Ursaring",
		'pt-br': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'es-es': "Teddiursa",
		'it-it': "Teddiursa",
		'pt-br': "Teddiursa",
		'de-de': "Teddiursa"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
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
				'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon. This attack does 50 damage to the new Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 50 dégâts au nouveau Pokémon Actif.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo. Este ataque hace 50 puntos de daño al nuevo Pokémon Activo.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo. Questo attacco infligge 50 danni al nuovo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente. Este ataque causa 50 de danos ao novo Pokémon Ativo.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus. Dieser Angriff fügt dem neuen Aktiven Pokémon 50 Schadenspunkte zu."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
				'es-es': "Dar Vueltas",
				'it-it': "Giravolta",
				'pt-br': "Balanço",
				'de-de': "Gegenschwung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Ogni volta che esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 40 de danos adicionais para cada cara.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "80+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Although it has a large body, it is quite skilled at climbing trees. It eats and sleeps in the treetops.",
	},

	thirdParty: {
		cardmarket: 286368,
		tcgplayer: 107241
	}
}

export default card
