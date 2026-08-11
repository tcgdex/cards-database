import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Smoochum",
		'fr-fr': "Lippouti",
		'de-de': "Kussilla"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [238],

	hp: 30,

	types: [
		"Psychic"
	],

	stage: "Baby",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Energy Kiss",
				'fr-fr': "Bisou d'énergie",
				'de-de': "Energy Kiss"
			},
			effect: {
				'en-us': "Flip a number of coins equal to the number of Energy cards attached to the Defending Pokémon. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez un nombre de pièces égal au nombre de cartes Énergie attachées au Pokémon Défenseur. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a number of coins equal to the number of Energy cards attached to the Defending Pokémon. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89360,
				cardmarket: 275134
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89360,
				cardmarket: 275134
			}
		},
	]
}

export default card
