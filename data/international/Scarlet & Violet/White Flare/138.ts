import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'de-de': "Zurrokex",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'es-es': "Scraggy",
		'es-mx': "Scraggy"
	},

	illustrator: "Nelnal",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'es-es': "Golpe Cabeza",
			'es-mx': "Golpe Cabeza"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			'en-us': "Invade",
			'fr-fr': "Envahissement",
			'de-de': "Einmarschieren",
			'it-it': "Scorreria",
			'pt-br': "Invadir",
			'es-es': "Invadir",
			'es-mx': "Invadir"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836161,
				tcgplayer: 642251
			}
		},
	],
}

export default card
