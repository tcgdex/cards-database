import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		'en-us': "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Single Shot Blast",
			'fr-fr': "Explosion Unique",
			'de-de': "Einzelschussballern",
			'es-es': "Disparo Único Explosivo",
			'pt-br': "Explosão Única",
			'it-it': "Tiro a Scoppio Singolo"
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
				cardmarket: 582412,
				tcgplayer: 253243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582412,
				tcgplayer: 253243
			}
		},
	],
}

export default card
