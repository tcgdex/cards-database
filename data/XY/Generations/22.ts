import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		de: "Karpador"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Epic Splash",
				fr: "Trempette Épique",
				de: "Irrer Platscher"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen „Zahl“ zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
		de: "Die urzeitlichen Vorfahren dieses Pokémon waren sehr viel stärker, als ihre heutigen Nachkommen."
	},

	thirdParty: {
		cardmarket: 288462,
		tcgplayer: 113680
	}
}

export default card
