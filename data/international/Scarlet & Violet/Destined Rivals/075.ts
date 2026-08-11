import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'de-de': "Frizelbliz",
		'it-it': "Electrike",
		'es-es': "Electrike",
		'pt-br': "Electrike",
		'es-mx': "Electrike"
	},


	illustrator: "Narano",

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'de-de': "Rückwärtskick",
			'it-it': "Retrocalcio",
			'es-es': "Patada Trasera",
			'pt-br': "Chute Traseiro",
			'es-mx': "Patada Trasera"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Tiny Bolt",
			'fr-fr': "Foudre Minuscule",
			'de-de': "Mini-Blitz",
			'it-it': "Minifulmine",
			'es-es': "Relampaguito",
			'pt-br': "Corisquinho",
			'es-mx': "Minirrayo"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825949,
				tcgplayer: 632885
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825949,
				tcgplayer: 632885
			}
		},
	],
}

export default card
