import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [50],
	set: Set,

	name: {
		'fr-fr': "Taupiqueur",
		'en-us': "Diglett",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Tête Excavatrice",
			'en-us': "Hole-Diggin' Noggin",
			'es-es': "Cabeza Cava-Hoyos",
			'it-it': "Zuccone Scavatore",
			'pt-br': "Cabeça Cavucadora",
			'de-de': "Buddelkopf"
		},

		effect: {
			'fr-fr': "Défaussez la carte du dessus de votre deck.",
			'en-us': "Discard the top card of your deck.",
			'es-es': "Descarta la primera carta de tu baraja.",
			'it-it': "Scarta la prima carta del tuo mazzo.",
			'pt-br': "Descarte a carta de cima do seu baralho.",
			'de-de': "Lege die oberste Karte deines Decks auf deinen Ablagestapel."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725183,
				tcgplayer: 509790,
				cardtrader: 255788
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725183,
				tcgplayer: 509790,
				cardtrader: 255788
			}
		},
	],

	illustrator: "OKACHEKE",

	
}

export default card
