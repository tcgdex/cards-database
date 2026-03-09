import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Moltres ex",
		fr: "Sulfura ex",
		de: "Lavados ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		146,
	],

	hp: 110,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Crushing Flames",
				fr: "Flammes destructrices",
				de: "Crushing Flames"
			},
			effect: {
				en: "You may discard an Energy card attached to Moltres ex. If you do, the Defending Pokémon is now Confused.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Sulfura ex. Dans ce cas, le Pokémon Défenseur est maintenant Confus.",
				de: "You may discard an Energy card attached to Moltres ex. If you do, the Defending Pokémon is now Confused."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	abilities: [{
		name: {
			fr: "Ascension légendaire",
			de: "Legendary Ascent"
		},

		effect: {
			fr: "Une seule fois lors de votre tour, lorsque vous déplacez Sulfura ex de votre main à votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs avec Sulfura ex. Dans ce cas, vous pouvez également déplacer autant de cartes Énergie de base  attachées à votre Pokémon que vous le voulez et les placer sur Sulfura ex.",
			de: "Once during your turn, when you put Moltres ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Moltres ex. If you do, you may also move any number of basic  Energy cards attached to your Pokémon to Moltres ex."
		},

		type: "Poke-POWER"
	}],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276291,
		tcgplayer: 87566
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
