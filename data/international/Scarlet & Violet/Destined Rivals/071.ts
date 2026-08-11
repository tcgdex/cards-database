import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [172],
	set: Set,

	name: {
		'en-us': "Ethan's Pichu",
		'fr-fr': "Pichu de Luth",
		'de-de': "Klarins Pichu",
		'it-it': "Pichu di Armonio",
		'es-es': "Pichu de Eco",
		'pt-br': "Pichu do Ethan",
		'es-mx': "Pichu de Ethan"
	},


	illustrator: "Narumi Sato",

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Zapping Draw",
			'fr-fr': "Pioche Électrocutante",
			'de-de': "Kurzschlusszug",
			'it-it': "Pesca Fulminante",
			'es-es': "Robo Aturdidor",
			'pt-br': "Compra Eletrizante",
			'es-mx': "Robochispazo"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre uma carta.",
			'es-mx': "Roba 1 carta."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825945,
				tcgplayer: 630819
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825945,
				tcgplayer: 630819
			}
		},
	],
}

export default card
