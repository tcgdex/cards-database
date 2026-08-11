import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Articuno ex",
		'fr-fr': "Artikodin ex",
		'de-de': "Arktos ex"
	},

	suffix: "ex",
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Cold Crush",
				'fr-fr': "Écraser net",
				'de-de': "Cold Crush"
			},
			effect: {
				'en-us': "You may discard an Energy card attached to Articuno ex. If you do, your opponent discards an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Vous pouvez défausser une carte Énergie attachée à Artikodin ex. Dans ce cas, votre adversaire doit défausser une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "You may dicard an Energy card attached to Articuno ex. If you do, your opponent discard an Energy card attached to the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	abilities: [{
		name: {
			'fr-fr': "Ascension légendaire",
			'de-de': "Legendary Ascent"
		},

		effect: {
			'fr-fr': "Une seule fois lors de votre tour, lorsque vous déplacez Artikodin ex de votre main à votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs avec Artikodin ex. Dans ce cas, vous pouvez également déplacer autant de cartes Énergie de base  attachées à votre Pokémon que vous le voulez et les placer sur Artikodin ex.",
			'de-de': "Once during your turn, when you put Articuno ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Articuno ex. If you do, you may also move any number of basic  Energy cards attached to your Pokémon to Articuno ex."
		},

		type: "Poke-POWER"
	}],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276290,
				tcgplayer: 83654
			},
		},
	]
}

export default card
