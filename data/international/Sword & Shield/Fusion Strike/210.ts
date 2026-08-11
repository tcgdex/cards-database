import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [300],
	set: Set,

	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'it-it': "Skitty",
		'pt-br': "Skitty",
		'de-de': "Eneco"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yukiko Baba",

	description: {
		'en-us': "It shows its cute side by chasing its own tail until it gets dizzy."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Whimsy Tackle",
			'fr-fr': "Charge Bizarre",
			'de-de': "Launischer Tackle",
			'es-es': "Placaje Caprichoso",
			'pt-br': "Investida Fantástica",
			'it-it': "Capriccioazione"
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
				cardmarket: 582946,
				tcgplayer: 253306
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582946,
				tcgplayer: 253306
			}
		},
	],
}

export default card
