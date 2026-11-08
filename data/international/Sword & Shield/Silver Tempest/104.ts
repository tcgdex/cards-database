import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "It loves to drink other creatures' blood. It's said that if it finds others of its kind going hungry, it sometimes shares the blood it's gathered.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682151,
				tcgplayer: 451758
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682151,
				tcgplayer: 451758
			}
		},
	],
}

export default card
