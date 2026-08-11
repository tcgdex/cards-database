import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [176],
	set: Set,

	name: {
		'fr-fr': "Togetic",
		'en-us': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		'fr-fr': "Togepi",
		'en-us': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Paix Partagée",
			'en-us': "Shared Peace",
			'es-es': "Paz Compartida",
			'it-it': "Pace Condivisa",
			'pt-br': "Paz Compartilhada",
			'de-de': "Geteilter Frieden"
		},

		effect: {
			'fr-fr': "Chaque joueur pioche 3 cartes.",
			'en-us': "Each player draws 3 cards.",
			'es-es': "Cada jugador roba 3 cartas.",
			'it-it': "Ciascun giocatore pesca tre carte.",
			'pt-br': "Cada jogador compra 3 cartas.",
			'de-de': "Jeder Spieler zieht 3 Karten."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Plongée Rapide",
			'en-us': "Speed Dive",
			'es-es': "Picado Rápido",
			'it-it': "Immersione Rapida",
			'pt-br': "Mergulho Veloz",
			'de-de': "Tempohechtsprung"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It grows dispirited if it is not with kind people. It can float in midair without moving its wings.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725164,
				tcgplayer: 509833,
				cardtrader: 255769
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725164,
				tcgplayer: 509833,
				cardtrader: 255769
			}
		},
	],

	illustrator: "Kyoko Umemoto",

	
}

export default card
