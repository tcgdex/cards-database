import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'es-es': "Ursaring",
		'it-it': "Ursaring",
		'pt-br': "Ursaring",
		'de-de': "Ursaring"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "Hasegawa Saki",

	attacks: [{
		name: {
			'en-us': "Slash",
			'fr-fr': "Tranche",
			'es-es': "Cuchillada",
			'it-it': "Lacerazione",
			'pt-br': "Slash",
			'de-de': "Schlitzer"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Whap Down",
			'fr-fr': "Assommer",
			'es-es': "Zurrar",
			'it-it': "Bastonata",
			'pt-br': "Whap Down",
			'de-de': "Verdreschen"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [217],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'es-es': "Teddiursa",
		'it-it': "Teddiursa",
		'pt-br': "Teddiursa",
		'de-de': "Teddiursa"
	},

	description: {
		'en-us': "Although it has a large body, it is quite skilled at climbing trees. It eats and sleeps in the treetops."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574181,
				tcgplayer: 246850
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574181,
				tcgplayer: 246850
			}
		},
	],
}

export default card
