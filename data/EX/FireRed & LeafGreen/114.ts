import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Articuno ex",
		fr: "Artikodin ex",
		de: "Arktos ex"
	},

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
				en: "Cold Crush",
				fr: "Écraser net",
				de: "Cold Crush"
			},
			effect: {
				en: "You may discard an Energy card attached to Articuno ex. If you do, your opponent discards an Energy card attached to the Defending Pokémon.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Artikodin ex. Dans ce cas, votre adversaire doit défausser une carte Énergie attachée au Pokémon Défenseur.",
				de: "You may dicard an Energy card attached to Articuno ex. If you do, your opponent discard an Energy card attached to the Defending Pokémon."
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
			fr: "Ascension légendaire",
			de: "Legendary Ascent"
		},

		effect: {
			fr: "Une seule fois lors de votre tour, lorsque vous déplacez Artikodin ex de votre main à votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs avec Artikodin ex. Dans ce cas, vous pouvez également déplacer autant de cartes Énergie de base  attachées à votre Pokémon que vous le voulez et les placer sur Artikodin ex.",
			de: "Once during your turn, when you put Articuno ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Articuno ex. If you do, you may also move any number of basic  Energy cards attached to your Pokémon to Articuno ex."
		},

		type: "Poke-POWER"
	}],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276290,
		tcgplayer: 83654
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
