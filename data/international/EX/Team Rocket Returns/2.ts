import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Ampharos",
		'de-de': "Dunkles Ampharos"
	},

	illustrator: "Emi Miwa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		181,
	],

	hp: 120,

	types: [
		"Lightning",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Dark Flaaffy",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Darkest Impulse",
				'de-de': "Darkest Impulse"
			},
			effect: {
				'en-us': "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
				'de-de': "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darest Impulse Poke-Body each turn."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'de-de': "Ram"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shock Bolt",
				'de-de': "Shock Bolt"
			},
			effect: {
				'en-us': "Discard all Lightning Energy attached to Dark Ampharos.",
				'de-de': "Discard all  Energy attached to Dark Ampharos."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276294,
				tcgplayer: 84562
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276294,
				tcgplayer: 84562
			},
		},
	],

}

export default card
