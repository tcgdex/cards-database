import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
			],
			name: {
				'en-us': "Gnaw Off",
				'fr-fr': "Rongement",
				'es-es': "Roer Completamente",
				'it-it': "Rosicchia Via",
				'pt-br': "Corroer",
				'de-de': "Abnagen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 10 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They cannot see, so they tackle and bite to learn about their surroundings. Their bodies are covered in wounds.",
	},

	thirdParty: {
		cardmarket: 281878,
		tcgplayer: 94640
	}
}

export default card
