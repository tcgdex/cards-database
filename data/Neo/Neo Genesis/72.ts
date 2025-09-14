import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Shuckle",
		fr: "Caratroc",
		de: "Pottrott"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		213,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Withdraw",
				fr: "Repli",
				de: "Withdraw"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shuckle during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Caratroc pendant le prochain tour de votre adversaire (Tous les autres effets ou attaques sont toujours valides.)",
				de: "Flip a coin. If heads, prevent all damage done to Shuckle during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Wrap",
				fr: "Ligotage",
				de: "Wrap"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Les baies qu'il transporte dans sa coquille en forme de vase se décomposent et deviennent un liquide gluant."
	},

	thirdParty: {
		cardmarket: 274472,
		tcgplayer: 89188
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card
