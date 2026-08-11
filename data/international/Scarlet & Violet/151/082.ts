import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		'fr-fr': "Magnéton",
		'en-us': "Magneton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Magnéti",
		'en-us': "Magnemite",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Aimant à Camelotes",
			'en-us': "Junk Magnet",
			'es-es': "Imán de Chatarra",
			'it-it': "Magnetescarti",
			'pt-br': "Ímã de Sucata",
			'de-de': "Schrottmagnet"
		},

		effect: {
			'fr-fr': "Ajoutez jusqu'à 2 cartes Objet de votre pile de défausse à votre main.",
			'en-us': "Put up to 2 Item cards from your discard pile into your hand.",
			'es-es': "Pon hasta 2 cartas de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Itemkarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Éclair Frontal",
			'en-us': "Head Bolt",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733677,
				tcgplayer: 516649,
				cardtrader: 261194
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733677,
				tcgplayer: 516649,
				cardtrader: 261194
			}
		},
	],

	illustrator: "Yuka Morii",

	
}

export default card
