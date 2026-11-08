import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [369],
	set: Set,

	name: {
		'en-us': "Relicanth",
		'fr-fr': "Relicanth",
		'es-es': "Relicanth",
		'it-it': "Relicanth",
		'pt-br': "Relicanth",
		'de-de': "Relicanth"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Into the Deep",
			'fr-fr': "Dans l'Abysse",
			'es-es': "En lo Profundo",
			'it-it': "Baratro",
			'pt-br': "Nas Profundezas",
			'de-de': "In die Tiefe"
		},

		effect: {
			'en-us': "Put up to 2 basic Energy cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.",
			'es-es': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674113,
				tcgplayer: 283994
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674113,
				tcgplayer: 283994
			}
		},
	],
}

export default card
