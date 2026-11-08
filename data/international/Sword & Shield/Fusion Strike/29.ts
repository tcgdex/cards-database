import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [37],
	set: Set,

	name: {
		'en-us': "Vulpix",
		'fr-fr': "Goupix",
		'es-es': "Vulpix",
		'it-it': "Vulpix",
		'pt-br': "Vulpix",
		'de-de': "Vulpix"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Megumi Mizutani",

	description: {
		'en-us': "As each tail grows, its fur becomes more lustrous. When held, it feels slightly warm."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'de-de': "Schmetterkick",
			'es-es': "Patada Destrucción",
			'pt-br': "Chute Poderoso",
			'it-it': "Calcio Esplosivo"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582163,
				tcgplayer: 253125
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582163,
				tcgplayer: 253125
			}
		},
	],
}

export default card
