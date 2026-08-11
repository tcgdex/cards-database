import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		'fr-fr': "Magicarpe",
		'en-us': "Magikarp",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Trempette Trempée",
			'en-us': "Splashy Splash",
			'es-es': "Salpicadura Salpicona",
			'it-it': "Splash Grandioso",
			'pt-br': "Borrifada Borrifante",
			'de-de': "Platschiger Platscher"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, piochez une carte.",
			'en-us': "Flip a coin until you get tails. For each heads, draw a card.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
			'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
			'pt-br': "Jogue uma moeda até sair coroa. Para cada cara, compre uma carta.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Ziehe pro Kopf 1 Karte."
		}
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733724,
				tcgplayer: 516692,
				cardtrader: 261130
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733724,
				tcgplayer: 516692,
				cardtrader: 261130
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
