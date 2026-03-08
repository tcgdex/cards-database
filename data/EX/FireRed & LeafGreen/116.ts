import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Zapdos ex",
		fr: "Élector ex",
		de: "Zapdos ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electron Crush",
				fr: "Écrasement d'électron",
				de: "Electron Crush"
			},
			effect: {
				en: "You may discard an Energy card attached to Zapdos ex. If you do, this attack does 50 damage plus 20 more damage.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Élector ex. Dans ce cas, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				de: "You may discard an Energy card attached to Zapdos ex. If you do, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	abilities: [{
		name: {
			fr: "Ascension légendaire",
			de: "Legendary Ascent"
		},

		effect: {
			fr: "Une seule fois lors de votre tour, lorsque vous déplacez Élector ex de votre main à votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs avec Élector ex. Dans ce cas, vous pouvez également déplacer autant de cartes Énergie de base  attachées à votre Pokémon que vous le voulez et les placer sur Élector ex.",
			de: "Once during your turn, when you put Zapdos ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Zapdos ex. If you do, you may also move any number of basic  Energy cards attached to your Pokémon to Zapdos ex."
		},

		type: "Poke-POWER"
	}],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276292,
		tcgplayer: 90723
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
