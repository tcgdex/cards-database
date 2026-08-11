import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'es-es': "Cherubi",
		'it-it': "Cherubi",
		'pt-br': "Cherubi",
		'de-de': "Kikugi"
	},

	illustrator: "Asako Ito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		420,
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
				'en-us': "Surprise Attack",
				'fr-fr': "Attaque Surprise",
				'es-es': "Ataque Sorpresa",
				'it-it': "Attacco a Sorpresa",
				'pt-br': "Ataque Surpresa",
				'de-de': "Überraschungsangriff"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
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
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It evolves by sucking the energy out of the small ball where it had been storing nutrients.",
	},

	thirdParty: {
		cardmarket: 315942,
		tcgplayer: 157627
	}
}

export default card
