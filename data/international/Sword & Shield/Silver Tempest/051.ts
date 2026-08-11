import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [170],
	set: Set,

	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'es-es': "Chinchou",
		'it-it': "Chinchou",
		'pt-br': "Chinchou",
		'de-de': "Lampi"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Lightning Ball",
			'fr-fr': "Boule Éclair",
			'es-es': "Bola Relámpago",
			'it-it': "Fulminpalla",
			'pt-br': "Bola de Raios",
			'de-de': "Kugelblitz"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha",
			'de-de': "Sanfter Hieb"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Its antennae, which evolved from a fin, have both positive and negative charges flowing through them.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682098,
				tcgplayer: 451705
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682098,
				tcgplayer: 451705
			}
		},
	],
}

export default card
