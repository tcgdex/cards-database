import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		'fr-fr': "Luxio",
		'en-us': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'fr-fr': "Lixy",
		'en-us': "Shinx",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'fr-fr': "Coup de Pied Ravageur",
			'en-us': "Zap Kick",
			'es-es': "Electropatada",
			'it-it': "Dinamocalcio",
			'pt-br': "Chute Zap",
			'de-de': "Stromtritt"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Éclair Frontal",
			'en-us': "Head Bolt",
			'es-es': "Rayo de Cabeza",
			'it-it': "Zuccalampo",
			'pt-br': "Raio de Cabeça",
			'de-de': "Kopf-Blitz"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715545,
				tcgplayer: 497481,
				cardtrader: 249853
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715545,
				tcgplayer: 497481,
				cardtrader: 249853
			}
		},
	],

	illustrator: "Narumi Sato",

	description: {
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
	},
}

export default card
