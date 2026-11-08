import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [364],
	set: Set,

	name: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale",
			'es-es': "Rayo Aurora",
			'it-it': "Raggiaurora",
			'pt-br': "Raio Aurora",
			'de-de': "Aurorastrahl"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Be it Spheal or a Poké Ball, it will spin any round object on its nose with the greatest of ease."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567118,
				tcgplayer: 241691
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567118,
				tcgplayer: 241691
			}
		},
	],
}

export default card
