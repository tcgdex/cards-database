import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [704],
	set: Set,

	name: {
		'en-us': "Goomy",
		'fr-fr': "Mucuscule",
		'es-es': "Goomy",
		'it-it': "Goomy",
		'pt-br': "Goomy",
		'de-de': "Viscora"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Dragon"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Miki Tanaka",

	description: {
		'en-us': "Their horns are powerful sensors. As soon as Goomy pick up any sign of enemies, they go into hiding. This is how they've survived."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'de-de': "Tackle",
			'es-es': "Placaje",
			'pt-br': "Investida",
			'it-it': "Azione"
		},

		damage: 10
	}, {
		cost: ["Water", "Psychic"],

		name: {
			'en-us': "Melt",
			'fr-fr': "Dissolution",
			'de-de': "Schmelzen",
			'es-es': "Derretir",
			'pt-br': "Derreter",
			'it-it': "Liquefazione"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582869,
				tcgplayer: 253353
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582869,
				tcgplayer: 253353
			}
		},
	],
}

export default card
