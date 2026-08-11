import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [167],
	set: Set,

	name: {
		'fr-fr': "Mimigal",
		'en-us': "Spinarak",
		'es-es': "Spinarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak",
		'de-de': "Webarak"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	attacks: [{
		name: {
			'fr-fr': "Suspension",
			'en-us': "Hang Down",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'fr-fr': "Dard",
			'en-us': "Sting",
			'es-es': "Aguijonazo",
			'it-it': "Puntura",
			'pt-br': "Ferroada",
			'de-de': "Einstich"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Although the poison from its fangs isn't that strong, it's potent enough to weaken prey that gets caught in its web."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539238,
				tcgplayer: 232509
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539238,
				tcgplayer: 232509
			}
		},
	],
}

export default card
