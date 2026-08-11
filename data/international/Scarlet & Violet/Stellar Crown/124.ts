import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [831],
	set: Set,

	name: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'pt-br': "Wooloo",
		'de-de': "Wolly"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Knock Over",
			'fr-fr': "Culbute",
			'es-es': "Tumbar",
			'it-it': "Sconvolgimento",
			'pt-br': "Arrebatar",
			'de-de': "Umwerfen"
		},

		effect: {
			'en-us': "You may discard a Stadium in play.",
			'fr-fr': "Vous pouvez défausser un Stade en jeu.",
			'es-es': "Puedes descartar 1 Estadio en juego.",
			'it-it': "Puoi scartare una carta Stadio in gioco.",
			'pt-br': "Você pode descartar um Estádio em jogo.",
			'de-de': "Du kannst 1 Stadionkarte im Spiel auf den Ablagestapel legen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785978,
				tcgplayer: 567358
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785978,
				tcgplayer: 567358
			}
		},
	],

	illustrator: "Wintr Wandr",

}

export default card
