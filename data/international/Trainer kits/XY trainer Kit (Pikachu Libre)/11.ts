import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [309],
	set: Set,

	name: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Akira Komayama",

	description: {
		'en-us': "It stores static electricity in its fur for discharging. It gives off sparks if a storm approaches."
	},

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118813
	}
}

export default card