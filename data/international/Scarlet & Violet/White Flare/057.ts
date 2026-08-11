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

	illustrator: "osare",
	rarity: "Common",
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
			type: "normal",
			thirdParty: {
				cardmarket: 836006,
				tcgplayer: 642169
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836006,
				tcgplayer: 642169
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836597,
				tcgplayer: 642411
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 836598,
				tcgplayer: 642339
			}
		},
	],
}

export default card
