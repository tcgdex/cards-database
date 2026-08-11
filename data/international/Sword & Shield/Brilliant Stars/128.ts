import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [780],
	set: Set,

	name: {
		'en-us': "Drampa V",
		'fr-fr': "Draïeul V",
		'es-es': "Drampa V",
		'it-it': "Drampa V",
		'pt-br': "Drampa V",
		'de-de': "Sen-Long V"
	},

	illustrator: "aky CG Works",
	rarity: "Holo Rare V",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spike Draw",
			'fr-fr': "Pique-Pioche",
			'es-es': "Robo Pico",
			'it-it': "Battipesca",
			'pt-br': "Comprada Espinhosa",
			'de-de': "Stachelzug"
		},

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Dragon Pulse",
			'fr-fr': "Draco-Choc",
			'es-es': "Pulso Dragón",
			'it-it': "Dragopulsar",
			'pt-br': "Pulso do Dragão",
			'de-de': "Drachenpuls"
		},

		effect: {
			'en-us': "Discard the top 2 cards of your deck.",
			'fr-fr': "Défaussez les 2 cartes du dessus de votre deck.",
			'es-es': "Descarta las 2 primeras cartas de tu baraja.",
			'it-it': "Scarta le prime due carte del tuo mazzo.",
			'pt-br': "Descarte as 2 cartas de cima do seu baralho.",
			'de-de': "Lege die obersten 2 Karten deines Decks auf deinen Ablagestapel."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 608674,
				tcgplayer: 263851
			}
		},
	],
}

export default card
