import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [492],
	set: Set,

	name: {
		'en-us': "Shaymin",
		'fr-fr': "Shaymin",
		'es-es': "Shaymin",
		'it-it': "Shaymin",
		'pt-br': "Shaymin",
		'de-de': "Shaymin"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gather Flowers",
			'fr-fr': "Brassée de Fleurs",
			'es-es': "Recoger Flores",
			'it-it': "Coglifiori",
			'pt-br': "Reunir Flores",
			'de-de': "Blumen sammeln"
		},

		effect: {
			'en-us': "Shuffle up to 2 Energy cards from your discard pile into your deck.",
			'fr-fr': "Mélangez avec votre deck jusqu'à 2 cartes Énergie de votre pile de défausse.",
			'es-es': "Pon hasta 2 cartas de Energía de tu pila de descartes en tu baraja y barájalas todas.",
			'it-it': "Rimischia fino a due carte Energia dalla tua pila degli scarti nel tuo mazzo.",
			'pt-br': "Embaralhe até 2 cartas de Energia da sua pilha de descarte no seu baralho.",
			'de-de': "Mische bis zu 2 Energiekarten aus deinem Ablagestapel in dein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "The blooming of Gracidea flowers confers the power of flight upon it. Feelings of gratitude are the message it delivers.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691834,
				tcgplayer: 478149
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691834,
				tcgplayer: 478149
			}
		},
	],
}

export default card
