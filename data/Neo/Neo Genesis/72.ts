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
				de: "Panzerschutz"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shuckle during your opponent's next turn. (Any other effects of attacks still happen.)",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les dégâts infligés à Caratroc pendant le prochain tour de votre adversaire (Tous les autres effets ou attaques sont toujours valides.)",
				de: "Wirf eine Münze. Verhindere bei „Kopf“ alle Schadenspunkte, die Pottrott während des nächsten gegnerischen Zuges zugefügt werden. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
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
				de: "Wickel"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigenden Pokémon jetzt gelähmt."
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
		en: "The Berries it stores in its vaselike shell decompose and become a gooey liquid.",
		fr: "Les baies qu'il transporte dans sa coquille en forme de vase se décomposent et deviennent un liquide gluant.",
		de: "Die Beeren, die es in seinem vasenähnlichen Panzer speichert, zersetzen sich und werden zu einer klebrigen Flüssigkeit."
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
