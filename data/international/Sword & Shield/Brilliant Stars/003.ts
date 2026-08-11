import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [285],
	set: Set,

	name: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon",
		'es-es': "Shroomish",
		'it-it': "Shroomish",
		'pt-br': "Shroomish",
		'de-de': "Knilz"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It spouts poison spores from the top of its head. These spores cause pain all over if inhaled.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608427,
				tcgplayer: 263580
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608427,
				tcgplayer: 263580
			}
		},
	],
}

export default card
