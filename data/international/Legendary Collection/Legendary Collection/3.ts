import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Charizard"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [6],

	hp: 120,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Charmeleon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Energy Burn"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Spin"
			},
			effect: {
				'en-us': "Discard 2 Energy cards attached to Charizard or this attack does nothing."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 118404
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274768,
				tcgplayer: 84196
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84196,
				cardmarket: 274768
			}
		},
		{
			type: "reverse",
			size: 'jumbo',
			thirdParty: {
				cardmarket: 274768,
				tcgplayer: 210841
			}
		},
	],

}

export default card
