import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [419],
	set: Set,

	name: {
		'en-us': "Floatzel",
		'fr-fr': "Mustéflott",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'pt-br': "Floatzel",
		'de-de': "Bojelin"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'es-es': "Buizel",
		'it-it': "Buizel",
		'pt-br': "Buizel",
		'de-de': "Bamelin"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Floatify",
			'fr-fr': "Flottifier",
			'es-es': "Flotación",
			'it-it': "Galleggiamento",
			'pt-br': "Flutualizador",
			'de-de': "Floaten"
		},

		effect: {
			'en-us': "Put up to 2 Item cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 2 cartes Objet de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 2 cartas de Objeto de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Item da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Itemkarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608489,
				tcgplayer: 263738
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608489,
				tcgplayer: 263738
			}
		},
	],
}

export default card
