import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [960],
	set: Set,

	name: {
		'fr-fr': "Taupikeau",
		'en-us': "Wiglett",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'pt-br': "Wiglett",
		'de-de': "Schligda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Pluie Éclaboussante",
			'en-us': "Rain Splash",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725138,
				tcgplayer: 509807,
				cardtrader: 255618
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725138,
				tcgplayer: 509807,
				cardtrader: 255618
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
