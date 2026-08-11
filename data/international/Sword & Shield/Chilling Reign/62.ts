import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [353],
	set: Set,

	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
		'es-es': "Shuppet",
		'it-it': "Shuppet",
		'pt-br': "Shuppet",
		'de-de': "Shuppet"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Will-O-Wisp",
			'fr-fr': "Feu Follet",
			'es-es': "Fuego Fatuo",
			'it-it': "Fuocofatuo",
			'pt-br': "Fogo Fátuo",
			'de-de': "Irrlicht"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "There's a proverb that says, \"Shun the house where Shuppet gather in the growing dusk.\""
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567170,
				tcgplayer: 241723
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567170,
				tcgplayer: 241723
			}
		},
	],
}

export default card
