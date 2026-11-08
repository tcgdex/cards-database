import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [447],

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Best Punch",
				'fr-fr': "Coup de Poing Ultime",
				'es-es': "Mejor Puñetazo",
				'it-it': "Migliorpugno",
				'pt-br': "Soco Absoluto",
				'de-de': "Bester Schlag"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It's exceedingly energetic, with enough stamina to keep running all through the night. Taking it for walks can be a challenging experience."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511870,
				tcgplayer: 226526
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511870,
				tcgplayer: 226526
			}
		},
	],
}

export default card
