import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Drowzee",
		'fr-fr': "Soporifik",
		'es-es': "Drowzee",
		'it-it': "Drowzee",
		'pt-br': "Drowzee",
		'de-de': "Traumato"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	illustrator: "nagimiso",

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pound",
			'de-de': "Klaps"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		'en-us': "It puts its prey to sleep and devours their dreams. It seems that bad dreams taste sour, so Drowzee doesn't particularly like eating them."
	},

	dexId: [96],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574109,
				tcgplayer: 246827
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574109,
				tcgplayer: 246827
			}
		},
	],
}

export default card
