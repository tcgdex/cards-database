import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Jolteon",
		'fr-fr': "Voltali",
		'de-de': "Blitza"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [135],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Kick",
				'fr-fr': "Double pied",
				'de-de': "Double Kick"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de face.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20×",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Strike",
				'fr-fr': "Frap'éclair",
				'de-de': "Lightning Strike"
			},
			effect: {
				'en-us': "You may discard all Lightning Energy cards attached to Jolteon. If you do, this attack's base damage is 70 instead of 40.",
				'fr-fr': "Vous pouvez défausser toutes les cartes Énergie  attachées à Voltali. Dans ce cas, les dégâts de base de cette attaque sont de 70 et non de 40.",
				'de-de': "You may discard all  Energy cards attached to Jolteon. If you do, this attack's base damage is 70 instead of 40."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 86336
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275783,
				tcgplayer: 86336
			}
		},
	],

}

export default card
