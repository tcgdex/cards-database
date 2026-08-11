import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Wrap",
				'fr-fr': "Ligotage",
				'es-es': "Constricción",
				'it-it': "Avvolgibotta",
				'pt-br': "Embrulho",
				'de-de': "Wickel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "After a 10-hour struggle, a fisherman was able to pull one up and confirm its existence.",
	},

	thirdParty: {
		cardmarket: 363506,
		tcgplayer: 175438
	}
}

export default card
