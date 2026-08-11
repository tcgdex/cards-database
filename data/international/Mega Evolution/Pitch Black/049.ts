import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'es-mx': "Vullaby",
		'de-de': "Skallyk",
		'it-it': "Vullaby",
		'pt-br': "Vullaby"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [629],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'es-mx': "Aleteo",
			'de-de': "Flattern",
			'it-it': "Alabattito",
			'pt-br': "Asa"
		},

		cost: ["Darkness"],

		damage: 10
	}, {
		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
			'es-es': "Tornado",
			'es-mx': "Ráfaga de Aire",
			'de-de': "Windstoß",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento"
		},

		cost: ["Darkness", "Colorless"],

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895834,
				tcgplayer: 704806
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895834,
				tcgplayer: 704806
			}
		},
	],
}

export default card
