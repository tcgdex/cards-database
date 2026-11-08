import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Dark Dragonair"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [148],

	hp: 60,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Dratini"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Evolutionary Light"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Strike"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "As is fitting for a legendary Pokémon, it has many strange powers, including the ability to make rain or snow fall."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274803,
				tcgplayer: 84581
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84581,
				cardmarket: 274803
			}
		}
	],

}

export default card
