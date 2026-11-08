import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [115],
	set: Set,

	name: {
		'fr-fr': "Kangourex",
		'en-us': "Kangaskhan",
		'es-es': "Kangaskhan",
		'it-it': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'de-de': "Kangama"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Coup d'Boule",
			'en-us': "Headbutt",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Pique-Pioche",
			'en-us': "Spike Draw",
			'es-es': "Robo Pico",
			'it-it': "Battipesca",
			'pt-br': "Comprada Espinhosa",
			'de-de': "Stachelzug"
		},

		effect: {
			'fr-fr': "Piochez 2 cartes.",
			'en-us': "Draw 2 cards.",
			'es-es': "Roba 2 cartas.",
			'it-it': "Pesca due carte.",
			'pt-br': "Compre 2 cartas.",
			'de-de': "Ziehe 2 Karten."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "There are records of a lost human child being raised by a childless Kangaskhan.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725245,
				tcgplayer: 509673,
				cardtrader: 255850
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725245,
				tcgplayer: 509673,
				cardtrader: 255850
			}
		},
	],

	illustrator: "Yuya Oka",

	
}

export default card
