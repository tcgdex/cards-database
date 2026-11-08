import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [237],
	set: Set,

	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'es-es': "Hitmontop",
		'it-it': "Hitmontop",
		'pt-br': "Hitmontop",
		'de-de': "Kapoera"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Spinning Draw",
			'fr-fr': "Pioche Tournante",
			'es-es': "Robo Giratorio",
			'it-it': "Pesca Rotante",
			'pt-br': "Compra Giratória",
			'de-de': "Drehender Zug"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte."
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Cyclone Kick",
			'fr-fr': "Pied Cyclone",
			'es-es': "Patada Ciclón",
			'it-it': "Calciovento",
			'pt-br': "Chute Ciclone",
			'de-de': "Wirbeltritt"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608522,
				tcgplayer: 263788
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608522,
				tcgplayer: 263788
			}
		},
	],
}

export default card
