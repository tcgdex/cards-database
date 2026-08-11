import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [667],
	set: Set,

	name: {
		'fr-fr': "Hélionceau",
		'en-us': "Litleo",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Destruction Ardente",
			'en-us': "Blazing Destruction",
			'es-es': "Destrucción Abrasadora",
			'it-it': "Raso al Fuoco",
			'pt-br': "Destruição Flamejante",
			'de-de': "Feurige Verwüstung"
		},

		effect: {
			'fr-fr': "Défaussez un Stade en jeu.",
			'en-us': "Discard a Stadium in play.",
			'es-es': "Descarta 1 Estadio en juego.",
			'it-it': "Scarta una carta Stadio in gioco.",
			'pt-br': "Descarte um Estádio em jogo.",
			'de-de': "Lege 1 Stadionkarte im Spiel auf den Ablagestapel."
		}
	}, {
		cost: ["Fire"],

		name: {
			'fr-fr': "Charbon Mutant",
			'en-us': "Live Coal",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Yuu Nishida",

	description: {
		'en-us': "When Litleo are young, female Pyroar will teach them how to hunt. Once the Litleo mature, they will leave the pride and set out on their own.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715504,
				tcgplayer: 498857,
				cardtrader: 248612
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715504,
				tcgplayer: 498857,
				cardtrader: 248612
			}
		},
	],

}

export default card