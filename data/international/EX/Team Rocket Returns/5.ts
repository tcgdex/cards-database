import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Houndoom",
		'de-de': "Dunkles Hundemon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Darkness",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Houndour",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Shakedown",
				'de-de': "Shakedown"
			},
			effect: {
				'en-us': "Choose a card from your opponent's hand without looking and discard it.",
				'de-de': "Choose a card from your opponent's hand without looking and discard it."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Fire",
				'de-de': "Dark Fire"
			},
			effect: {
				'en-us': "You may discard a Fire Energy or Darkness Energy attached to Dark Houndoom. If you do, this attack does 40 damage plus 20 more damage.\"",
				'de-de': "You may discard a  Energy or  Energy attached to Dark Houndoom. If you do, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276297,
				tcgplayer: 84611
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276297,
				tcgplayer: 84611
			},
		},
	],

}

export default card
