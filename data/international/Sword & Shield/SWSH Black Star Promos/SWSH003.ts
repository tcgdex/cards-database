import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		'fr-fr': "Larméléon",
		'en-us': "Sobble",
		'es-es': "Sobble",
		'it-it': "Sobble",
		'pt-br': "Sobble",
		'de-de': "Memmeon"
	},

	illustrator: "Mizue",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'fr-fr': "Étreinte",
				'en-us': "Bind",
				'es-es': "Atadura",
				'it-it': "Legatutto",
				'pt-br': "Ligação",
				'de-de': "Klammergriff"
			},
			effect: {
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},

	dexId: [816],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 427091
	}
}

export default card
