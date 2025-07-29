import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		pt: "Onix",
		de: "Onix"
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
				en: "Dig Deep",
				fr: "Trou Profond",
				es: "Cavahondo",
				it: "Scavaffondo",
				pt: "Cavar Fundo",
				de: "Tief graben"
			},
			effect: {
				en: "Put an Energy card from your discard pile into your hand.",
				fr: "Ajoutez une carte Énergie de votre pile de défausse à votre main.",
				es: "Pon 1 carta de Energía de tu pila de descartes en tu mano.",
				it: "Prendi una carta Energia dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				pt: "Coloque 1 carta de Energia da sua pilha de descarte na sua mão.",
				de: "Nimm 1 Energiekarte aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-Queue",
				es: "Coletazo",
				it: "Coda Esplosiva",
				pt: "Pancada de Cauda",
				de: "Schwanzschmetterer"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 408169
	}
}

export default card
