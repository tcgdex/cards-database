import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'pt-br': "Onix",
		'de-de': "Onix"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dig Deep",
				'fr-fr': "Trou Profond",
				'es-es': "Cavahondo",
				'it-it': "Scavaffondo",
				'pt-br': "Cavar Fundo",
				'de-de': "Tief graben"
			},
			effect: {
				'en-us': "Put an Energy card from your discard pile into your hand.",
				'fr-fr': "Ajoutez une carte Énergie de votre pile de défausse à votre main.",
				'es-es': "Pon 1 carta de Energía de tu pila de descartes en tu mano.",
				'it-it': "Prendi una carta Energia dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Coloque 1 carta de Energia da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 1 Energiekarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smash",
				'fr-fr': "Éclate-Queue",
				'es-es': "Coletazo",
				'it-it': "Coda Esplosiva",
				'pt-br': "Pancada de Cauda",
				'de-de': "Schwanzschmetterer"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett.",
	},

	thirdParty: {
		cardmarket: 408169,
		tcgplayer: 201134
	}
}

export default card
