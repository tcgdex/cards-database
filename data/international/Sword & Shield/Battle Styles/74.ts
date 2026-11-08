import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		'en-us': "Gurdurr",
		'fr-fr': "Ouvrifier",
		'es-es': "Gurdurr",
		'it-it': "Gurdurr",
		'pt-br': "Gurdurr",
		'de-de': "Strepoli"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Gurdurr excels at demolition—construction is not its forte. In any case, there's skill in the way this Pokémon wields its metal beam."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545486,
				tcgplayer: 234250
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545486,
				tcgplayer: 234250
			}
		},
	],
}

export default card
