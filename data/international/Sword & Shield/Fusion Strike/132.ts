import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [28],
	set: Set,

	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'es-es': "Sandslash",
		'it-it': "Sandslash",
		'pt-br': "Sandslash",
		'de-de': "Sandamer"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Kyoko Umemoto",

	description: {
		'en-us': "Thanks to its thick claws, it's good at climbing trees. There are plenty of Sandslash that park themselves in trees and go right to sleep."
	},

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Dig Uppercut",
			'fr-fr': "Poing Excavateur",
			'de-de': "Schaufelhaken",
			'es-es': "Gancho Excavador",
			'pt-br': "Cavar para Cima",
			'it-it': "Scavalesto"
		},

		damage: 60,

		effect: {
			'en-us': "Put a card from your discard pile into your hand.",
			'fr-fr': "Ajoutez à votre main une carte de votre pile de défausse.",
			'de-de': "Nimm 1 Karte aus deinem Ablagestapel auf deine Hand.",
			'es-es': "Pon 1 carta de tu pila de descartes en tu mano.",
			'pt-br': "Coloque 1 carta da sua pilha de descarte na sua mão.",
			'it-it': "Prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582710,
				tcgplayer: 253449
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582710,
				tcgplayer: 253449
			}
		},
	],
}

export default card
