import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Swinub",
		'fr-fr': "Marcacrin",
		'es-es': "Swinub",
		'es-mx': "Swinub",
		'de-de': "Quiekel",
		'it-it': "Swinub",
		'pt-br': "Swinub"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [220],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'es-mx': "Estampida",
			'de-de': "Zertrampeln",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Icy Snow",
			'fr-fr': "Verglas",
			'es-es': "Nieve Helada",
			'es-mx': "Nieve Helada",
			'de-de': "Eisiger Schnee",
			'it-it': "Geloneve",
			'pt-br': "Neve Congelada"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It searches for food by digging into the ground with its snout. Even frozen ground doesn't give it any trouble.",
	},

	illustrator: "imoniii",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857598,
				tcgplayer: 662230,
				cardtrader: 356806
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857598,
				tcgplayer: 662230,
				cardtrader: 356806
			}
		},
	],	
}

export default card
