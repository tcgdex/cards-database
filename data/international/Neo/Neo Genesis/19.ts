import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'de-de': "Metal Energy*"
	},

	illustrator: "Milky Isobe",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		'en-us': "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance).\nMetal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)",
		'de-de': "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't , whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance).\nMetal Energy provides  Energy. (Doesn't count as a basic Energy card.)"
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274419,
				tcgplayer: 87368
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274419,
				tcgplayer: 87368
			}
		}
	]
}

export default card
