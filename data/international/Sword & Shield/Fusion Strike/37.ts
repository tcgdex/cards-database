import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [513],
	set: Set,

	name: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit."
	},

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Surprise Attack",
			'fr-fr': "Attaque Surprise",
			'de-de': "Überraschungsangriff",
			'es-es': "Ataque Sorpresa",
			'pt-br': "Ataque Surpresa",
			'it-it': "Attacco a Sorpresa"
		},

		damage: 30,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing.",
			'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
			'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
			'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
			'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582171,
				tcgplayer: 253137
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582171,
				tcgplayer: 253137
			}
		},
	],
}

export default card
