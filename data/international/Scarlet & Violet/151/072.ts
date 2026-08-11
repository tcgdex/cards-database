import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [72],
	set: Set,

	name: {
		'fr-fr': "Tentacool",
		'en-us': "Tentacool",
		'es-es': "Tentacool",
		'it-it': "Tentacool",
		'pt-br': "Tentacool",
		'de-de': "Tentacha"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Picotement",
			'en-us': "Tingle",
			'es-es': "Hormigueo",
			'it-it': "Formicolio",
			'pt-br': "Formigamento",
			'de-de': "Kribbeln"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Arrosage",
			'en-us': "Watering",
			'es-es': "Riego",
			'it-it': "Innaffiare",
			'pt-br': "Irrigação",
			'de-de': "Gießen"
		},

		damage: 20
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
		'en-us': "This Pokémon is mostly made of water. A Tentacool out in the ocean is very hard to spot, because its body blends in with the sea.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733667,
				tcgplayer: 516565,
				cardtrader: 261154
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733667,
				tcgplayer: 516565,
				cardtrader: 261154
			}
		},
	],

	illustrator: "miki kudo",

	
}

export default card
