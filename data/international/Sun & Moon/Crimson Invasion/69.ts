import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Escavalier",
		'fr-fr': "Lançargot",
		'es-es': "Escavalier",
		'it-it': "Escavalier",
		'pt-br': "Escavalier",
		'de-de': "Cavalanzas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		589,
	],

	hp: 120,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Karrablast",
		'fr-fr': "Carabing",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Fury Attack",
				'fr-fr': "Furie",
				'es-es': "Ataque Furia",
				'it-it': "Furia",
				'pt-br': "Ataque de Fúria",
				'de-de': "Furienschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 30 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Iron Tackle",
				'fr-fr': "Charge de Fer",
				'es-es': "Bloqueo de Hierro",
				'it-it': "Azione Ferrea",
				'pt-br': "Golpe de Colisão Férreo",
				'de-de': "Eisentackle"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 30 dégâts.",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Este Pokémon causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 130,

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

	retreat: 2,

	description: {
		'en-us': "Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
	},

	thirdParty: {
		cardmarket: 311917,
		tcgplayer: 149093
	}
}

export default card
