import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'es-mx': "Gastly",
		'de-de': "Nebulak",
		'it-it': "Gastly",
		'pt-br': "Gastly"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [92],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Petty Grudge",
			'fr-fr': "Rancune Mesquine",
			'es-es': "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			'de-de': "Mini-Groll",
			'it-it': "Rancormeschino",
			'pt-br': "Rancinho"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
	},

	illustrator: "Saboteri",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857629,
				tcgplayer: 660495,
				cardtrader: 356837
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857629,
				tcgplayer: 660495,
				cardtrader: 356837
			}
		},
	],
}

export default card
