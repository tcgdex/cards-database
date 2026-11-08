import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Blissey ex",
		'fr-fr': "Leuphorie ex",
		'de-de': "Heiteira ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 160,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Chansey ex",
		'fr-fr': "Leveinard ou Leveinard ex"
	},

	suffix: "ex",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Blissful Support",
				'fr-fr': "Soutien divin",
				'de-de': "Blissful Support"
			},
			effect: {
				'en-us': "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon.",
				'fr-fr': "Une seule fois lors de votre tour, lorsque vous jouez Leuphorie ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser toutes les cartes Énergie attachées à autant de vos Pokémon que vous le voulez et leur retirer tous leurs marqueurs de dégât.",
				'de-de': "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Energy Absorption",
				'fr-fr': "Absorption d'énergie",
				'de-de': "Energy Absorption"
			},
			effect: {
				'en-us': "Attach up to 3 Energy cards from your discard pile to Blissey ex.",
				'fr-fr': "Attachez à Leuphorie ex jusqu'à 3 cartes Énergie de votre pile de défausse.",
				'de-de': "Attach up to 3 Energy cards from your discard pile to Blissey ex."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Roll Out",
				'fr-fr': "Roulade",
				'de-de': "Rollout"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83926,
				cardmarket: 276747
			},
		},
	],
}

export default card
