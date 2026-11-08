import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 110,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bind Wound",
				'fr-fr': "Blessure Pansée",
				'es-es': "Vendar Herida",
				'it-it': "Cura Ferite",
				'pt-br': "Ligar Ferida",
				'de-de': "Wunden verbinden"
			},
			effect: {
				'en-us': "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon.",
				'fr-fr': "Lancez une pièce. Si c’est face, soignez 30 dégâts à l’un de vos Pokémon.",
				'es-es': "Lanza 1 moneda. Si sale cara, cura 30 puntos de daño a 1 de tus Pokémon.",
				'it-it': "Lancia una moneta. Se esce testa, cura uno dei tuoi Pokémon da 30 danni.",
				'pt-br': "Jogue 1 moeda. Se sair cara, cure 30 pontos de dano de 1 dos seus Pokémon.",
				'de-de': "Wirf 1 Münze. Heile bei Kopf 30 Schadenspunkte bei 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The eggs laid by Chansey are rich in nutrients and a favorite food of many Pokémon.",
	},

	thirdParty: {
		cardmarket: 297554,
		tcgplayer: 131019
	}
}

export default card
