import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'de-de': "Pottrott"
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
				'en-us': "Withdraw",
				'fr-fr': "Repli",
				'de-de': "Withdraw"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to Shuckle during your opponent's next turn. (Any other effects of attacks still happen.)",
				'fr-fr': "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Caratroc pendant le prochain tour de votre adversaire (Tous les autres effets ou attaques sont toujours valides.)",
				'de-de': "Flip a coin. If heads, prevent all damage done to Shuckle during your opponent's next turn. (Any other effects of attacks still happen.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'de-de': "Wrap"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
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
	retreat: 1,


	description: {
		'en-us': "The Berries it stores in its vaselike shell decompose and become a gooey liquid.",
		'fr-fr': "Les baies qu'il transporte dans sa coquille en forme de vase se décomposent et deviennent un liquide gluant."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274472,
				tcgplayer: 89188
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274472,
				tcgplayer: 89188
			}
		}
	]
}

export default card
