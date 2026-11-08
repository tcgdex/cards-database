import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [622],
	set: Set,

	name: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
		'es-es': "Golett",
		'it-it': "Golett",
		'pt-br': "Golett",
		'de-de': "Golbit"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'en-us': "Punch",
			'fr-fr': "Koud'Poing",
			'es-es': "Puño",
			'it-it': "Pugno",
			'pt-br': "Soco",
			'de-de': "Boxhieb"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "This Pokémon was created from clay. It received orders from its master many thousands of years ago, and it still follows those orders to this day."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567173,
				tcgplayer: 241726
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567173,
				tcgplayer: 241726
			}
		},
	],
}

export default card
