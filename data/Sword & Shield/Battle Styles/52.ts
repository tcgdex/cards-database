import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Yamper",
		fr: "Voltoutou"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Ball Search",
			fr: "Recherche de Balls"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may put a Poké Ball card, a Great Ball card, or 1 of each from your discard pile into your hand.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez ajouter une carte Poké Ball, une carte Super Ball, ou une de chaque, de votre pile de défausse à votre main."
		}
	}],

	attacks: [{
		name: {
			en: "Flop",
			fr: "Flop"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card