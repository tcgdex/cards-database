import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Moltres ex",
		fr: "Sulfura ex"
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
				fr: "Flammes destructrices"
			},
			effect: {
				en: "You may discard an Energy card attached to Moltres ex. If you do, the Defending Pokémon is now Confused.",
				fr: "Vous pouvez défausser une carte Énergie attachée à Sulfura ex. Dans ce cas, le Pokémon Défenseur est maintenant Confus."
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
			fr: "Ascension légendaire"
		},

		effect: {
			fr: "Une seule fois lors de votre tour, lorsque vous déplacez Sulfura ex de votre main à votre Banc, vous pouvez échanger 1 de vos Pokémon Actifs avec Sulfura ex. Dans ce cas, vous pouvez également déplacer autant de cartes Énergie de base  attachées à votre Pokémon que vous le voulez et les placer sur Sulfura ex."
		},

		type: "Poke-POWER"
	}]
}

export default card
