import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [520],

	name: {
		'en-us': "Tranquill",
		'fr-fr': "Colombeau",
		'es-es': "Tranquill",
		'it-it': "Tranquill",
		'pt-br': "Tranquill",
		'de-de': "Navitaub"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Pidove",
		'fr-fr': "Poichigeon",
		'es-es': "Pidove",
		'it-it': "Pidove",
		'pt-br': "Pidove",
		'de-de': "Dusselgurr"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Wing",
				'fr-fr': "Aile Tranchante",
				'es-es': "Ala Cortante",
				'it-it': "Ala Tagliente",
				'pt-br': "Asa Cortante",
				'de-de': "Rasierflügel"
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gust",
				'fr-fr': "Tornade",
				'es-es': "Tornado",
				'it-it': "Raffica",
				'pt-br': "Lufada de Vento",
				'de-de': "Windstoß"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 80,
	types: ["Colorless"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It can fly moderately quickly. No matter how far it travels, it can always find its way back to its master and its nest."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458108,
				tcgplayer: 213244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458108,
				tcgplayer: 213244
			}
		},
	],
}

export default card
