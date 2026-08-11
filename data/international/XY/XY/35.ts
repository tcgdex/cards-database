import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Seafaring",
				'fr-fr': "Voyage en Mer",
				'es-es': "Náutico",
				'it-it': "Oceandante",
				'pt-br': "Viagem Marítima",
				'de-de': "Seefahrer"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, attach a Water Energy card from your discard pile to your Benched Pokémon in any way you like.",
				'fr-fr': "Lancez 3 pièces. Pour chaque côté face, attachez une carte Énergie Water de votre pile de défausse à vos Pokémon de Banc, de la manière que vous voulez.",
				'es-es': "Lanza 3 monedas. Por cada cara, une 1 carta de Energía Water de tu pila de descartes a tus Pokémon en Banca de la manera que desees.",
				'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, assegna a piacimento ai tuoi Pokémon in panchina una carta Energia Water dalla tua pila degli scarti.",
				'pt-br': "Jogue 3 moedas. Para cada cara, ligue um card de Energia Water da sua pilha de descarte no seu Pokémon no Banco do jeito que desejar.",
				'de-de': "Wirf 3 Münzen. Lege pro \"Kopf\" 1 Water-Energiekarte von deinem Ablagestapel beliebig an die Pokémon auf deiner Bank an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d'Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Esse ataque causa 20 de danos adicionais para cada Energia Water ligada a este Pokémon.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jede an dieses Pokémon angelegte Water-Energie zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They have gentle hearts. Because they rarely fight, many have been caught. Their number has dwindled.",
	},

	thirdParty: {
		cardmarket: 281372,
		tcgplayer: 86625
	}
}

export default card
