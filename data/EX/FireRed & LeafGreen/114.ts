import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Articuno ex",
		fr: "Artikodin ex"
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
				fr: "Écraser net"
			},
			effect: {
				en: "You may discard an Energy card attached to Articuno ex. If you do, your opponent discards an Energy card attached to the Defending Pokémon.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Artikodin ex. Dans ce cas, votre adversaire doit défausser une carte Énergie attachée au Pokémon Défenseur."
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
			fr: "Ascension légendaire"
		},

		effect: {
			fr: "Une seule fois lors de votre tour, lorsque vous déplacez Artikodin ex de votre main à votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs avec Artikodin ex. Dans ce cas, vous pouvez également déplacer autant de cartes Énergie de base  attachées à votre Pokémon que vous le voulez et les placer sur Artikodin ex."
		},

		type: "Poke-POWER"
	}]
}

export default card
