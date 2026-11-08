import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		'en-us': "Darkrai",
		'fr-fr': "Darkrai",
		'es-es': "Darkrai",
		'it-it': "Darkrai",
		'pt-br': "Darkrai",
		'de-de': "Darkrai"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Megumi Mizutani",

	description: {
		'en-us': "It can lull people to sleep and make them dream. It is active during nights of the new moon."
	},

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			'en-us': "Dark Cutter",
			'fr-fr': "Tranch'Obscur",
			'de-de': "Dunkler Zerschneider",
			'es-es': "Cuchilla Oscura",
			'pt-br': "Cortador de Escuridão",
			'it-it': "Oscurotaglio"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582795,
				tcgplayer: 253381
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582795,
				tcgplayer: 253381
			}
		},
	],
}

export default card
