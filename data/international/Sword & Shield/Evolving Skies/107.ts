import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'es-es': "Bagon",
		'it-it': "Bagon",
		'pt-br': "Bagon",
		'de-de': "Kindwurm"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",
	illustrator: "ryoma uratsuka",

	attacks: [{
		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Gnaw",
			'de-de': "Nagen"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Headbutt",
			'de-de': "Kopfnuss"
		},

		damage: 30,
		cost: ["Fire", "Water"]
	}],

	retreat: 2,
	dexId: [371],

	description: {
		'en-us': "Some theories suggest that its behavior of forcefully bashing its head into things stimulates cells that affect its evolution."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574155,
				tcgplayer: 246907
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574155,
				tcgplayer: 246907
			}
		},
	],
}

export default card
