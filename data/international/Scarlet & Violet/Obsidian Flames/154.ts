import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [965],
	set: Set,

	name: {
		'fr-fr': "Vrombi",
		'en-us': "Varoom",
		'es-es': "Varoom",
		'it-it': "Varoom",
		'pt-br': "Varoom",
		'de-de': "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Pioche Tournante",
			'en-us': "Spinning Draw",
			'es-es': "Robo Giratorio",
			'it-it': "Pesca Rotante",
			'pt-br': "Compra Giratória",
			'de-de': "Drehender Zug"
		},

		effect: {
			'fr-fr': "Piochez une carte.",
			'en-us': "Draw a card.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta.",
			'de-de': "Ziehe 1 Karte."
		},

		damage: 10
	}],

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
	regulationMark: "G",

	description: {
		'en-us': "It is said that this Pokémon was born when an unknown poison Pokémon entered and inspirited an engine left at a scrap-processing factory.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725234,
				tcgplayer: 509941,
				cardtrader: 255839
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725234,
				tcgplayer: 509941,
				cardtrader: 255839
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
