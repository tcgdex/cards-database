import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [737],
	set: Set,

	name: {
		'en-us': "Charjabug",
		'fr-fr': "Chrysapile",
		'es-es': "Charjabug",
		'it-it': "Charjabug",
		'pt-br': "Charjabug",
		'de-de': "Akkup"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Grubbin",
		'fr-fr': "Larvibule",
		'es-es': "Grubbin",
		'it-it': "Grubbin",
		'pt-br': "Grubbin",
		'de-de': "Mabula"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "sowsow",

	description: {
		'en-us': "Its digestive processes convert the leaves it eats into electricity. An electric sac in its belly stores the electricity for later use."
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne",
			'de-de': "Klammer",
			'es-es': "Agarre",
			'pt-br': "Agarramento Compressor",
			'it-it': "Presa"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Head Bolt",
			'fr-fr': "Éclair Frontal",
			'de-de': "Kopf-Blitz",
			'es-es': "Rayo de Cabeza",
			'pt-br': "Raio de Cabeça",
			'it-it': "Zuccalampo"
		},

		damage: 60
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582493,
				tcgplayer: 253256
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582493,
				tcgplayer: 253256
			}
		},
	],
}

export default card
