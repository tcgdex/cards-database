import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Blissey ex",
		fr: "Leuphorie ex",
		de: "Heiteira ex"
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
		en: "Chansey ex",
		fr: "Leveinard ou Leveinard ex"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Blissful Support",
				fr: "Soutien divin",
				de: "Blissful Support"
			},
			effect: {
				en: "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Leuphorie ex de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser toutes les cartes Énergie attachées à autant de vos Pokémon que vous le voulez et leur retirer tous leurs marqueurs de dégât.",
				de: "Once during your turn, when you play Blissey ex from your hand to evolve 1 of your Pokémon, you may discard all Energy cards attached to any number of your Pokémon and remove all damage counters from those Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Absorption",
				fr: "Absorption d'énergie",
				de: "Energy Absorption"
			},
			effect: {
				en: "Attach up to 3 Energy cards from your discard pile to Blissey ex.",
				fr: "Attachez à Leuphorie ex jusqu'à 3 cartes Énergie de votre pile de défausse.",
				de: "Attach up to 3 Energy cards from your discard pile to Blissey ex."
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
				en: "Roll Out",
				fr: "Roulade",
				de: "Rollout"
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

	thirdParty: {
		cardmarket: 276747,
		tcgplayer: 83926
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
