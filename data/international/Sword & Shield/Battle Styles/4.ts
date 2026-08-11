import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [331],
	set: Set,

	name: {
		'en-us': "Cacnea",
		'fr-fr': "Cacnea",
		'es-es': "Cacnea",
		'it-it': "Cacnea",
		'pt-br': "Cacnea",
		'de-de': "Tuska"
	},

	illustrator: "Kazuma Koda",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	attacks: [{
		name: {
			'en-us': "Zzzt",
			'fr-fr': "Bzzz",
			'es-es': "Bzzz",
			'it-it': "Bzzz",
			'pt-br': "Bzzz",
			'de-de': "Piiieks"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Beat",
			'fr-fr': "Bataille",
			'es-es': "Toque",
			'it-it': "Battuta",
			'pt-br': "Pulso",
			'de-de': "Verprügler"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
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
				cardmarket: 544916,
				tcgplayer: 234040
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544916,
				tcgplayer: 234040
			}
		},
	],
}

export default card
