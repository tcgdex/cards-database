import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue Battoir",
				'es-es': "Coletón",
				'it-it': "Codabotta",
				'pt-br': "Surra de Cauda",
				'de-de': "Schweifvertrimmer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "As it digs, it swallows sand and stores it in its neck pouch. The pouch can hold more than 17 pounds of sand."
	},

	dexId: [843],

	thirdParty: {
		cardmarket: 436654,
		tcgplayer: 208417
	}
}

export default card
