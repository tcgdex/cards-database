import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [707],
	set: Set,

	name: {
		'en-us': "Klefki",
		'fr-fr': "Trousselin",
		'es-es': "Klefki",
		'it-it': "Klefki",
		'pt-br': "Klefki",
		'de-de': "Clavion"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "MAHOU",

	description: {
		'en-us': "Long ago it lived in mines, but once the minerals that make up its diet became scarcer, Klefki began appearing in human settlements."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Unlock",
			'fr-fr': "Déverrouillage",
			'de-de': "Aufschließen",
			'es-es': "Abrir el Cerrojo",
			'pt-br': "Destrancar",
			'it-it': "Apertura"
		},

		damage: 10,

		effect: {
			'en-us': "Draw 2 cards.",
			'fr-fr': "Piochez 2 cartes.",
			'de-de': "Ziehe 2 Karten.",
			'es-es': "Roba 2 cartas.",
			'pt-br': "Compre 2 cartas.",
			'it-it': "Pesca due carte."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582814,
				tcgplayer: 253335
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582814,
				tcgplayer: 253335
			}
		},
	],
}

export default card
