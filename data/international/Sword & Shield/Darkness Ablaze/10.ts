import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [617],

	name: {
		'en-us': "Accelgor",
		'fr-fr': "Limaspeed",
		'es-es': "Accelgor",
		'it-it': "Accelgor",
		'pt-br': "Accelgor",
		'de-de': "Hydragil"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'de-de': "Schnuthelm"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jet Headbutt",
				'fr-fr': "Bélier Volant",
				'es-es': "Turbocabezazo",
				'it-it': "Zuccata Jet",
				'pt-br': "Cabeçada a Jato",
				'de-de': "Flinke Kopfnuss"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "It moves with blinding speed and lobs poison at foes. Featuring Accelgor as a main character is a surefire way to make a movie or comic popular."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482924,
				tcgplayer: 219087
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482924,
				tcgplayer: 219087
			}
		},
	],
}

export default card
