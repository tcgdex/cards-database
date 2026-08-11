import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [331],
	set: Set,

	name: {
		'fr-fr': "Cacnea",
		'en-us': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Uta",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	attacks: [{
		name: {
			'fr-fr': "Transpercement",
			'en-us': "Pierce",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 50,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It prefers harsh environments such as deserts. It can survive for 30 days on water stored in its body."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539043,
				tcgplayer: 232355
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539043,
				tcgplayer: 232355
			}
		},
	],
}

export default card
