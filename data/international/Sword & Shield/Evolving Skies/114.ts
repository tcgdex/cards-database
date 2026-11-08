import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],
	stage: "Stage1",
	illustrator: "Akira Komayama",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Bite",
			'de-de': "Biss"
		},

		damage: 40,
		cost: ["Psychic", "Darkness"]
	}, {
		name: {
			'en-us': "Dragon Headbutt",
			'fr-fr': "Dracoud'Boule",
			'es-es': "Cabezazo Dragón",
			'it-it': "Dragozuccata",
			'pt-br': "Dragon Headbutt",
			'de-de': "Drachen-Kopfnuss"
		},

		damage: 100,
		cost: ["Psychic", "Darkness", "Colorless", "Colorless"]
	}],

	retreat: 2,
	dexId: [634],

	evolveFrom: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	description: {
		'en-us': "Their two heads will fight each other over a single piece of food. Zweilous are covered in scars even without battling others."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574162,
				tcgplayer: 246912
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574162,
				tcgplayer: 246912
			}
		},
	],
}

export default card
