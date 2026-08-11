import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Last Resort",
				'fr-fr': "Dernier Recours",
				'es-es': "Última Baza",
				'it-it': "Ultimascelta",
				'pt-br': "Último Recurso",
				'de-de': "Zuflucht"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is strong despite its compact size. It can easily pick up and carry an adult human on its back.",
	},

	thirdParty: {
		cardmarket: 365748,
		tcgplayer: 178924
	}
}

export default card
