import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison Dodo",
				'es-es': "Veneno Somnífero",
				'it-it': "Sonnoveleno",
				'pt-br': "Veneno Sonífero",
				'de-de': "Schlafgift"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido y Envenenado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato e avvelenato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido e Envenenado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt und ist vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
	},

	thirdParty: {
		cardmarket: 286304,
		tcgplayer: 107177
	}
}

export default card
