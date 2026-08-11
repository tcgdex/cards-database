import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [499],

	description: {
		'en-us': "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Flame Charge",
			'fr-fr': "Nitrocharge"
		},

		effect: {
			'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
			'fr-fr': "Cherchez une carte Énergie  dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck."
		}
	}, {
		name: {
			'en-us': "Heat Crash",
			'fr-fr': "Tacle Feu"
		},

		damage: 50
	}],

	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon"
	},

	rarity: "None",
	hp: 100,
	types: ["Fire"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281781,
				tcgplayer: 88064
			}
		}
	]
}

export default card

