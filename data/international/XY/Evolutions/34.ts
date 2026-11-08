import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Bubble Beam",
				'fr-fr': "Bulles d'O",
				'es-es': "Rayo Burbuja",
				'it-it': "Bollaraggio",
				'pt-br': "Jato de Bolhas",
				'de-de': "Blubbstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-Rage",
				'es-es': "Furia Dragón",
				'it-it': "Ira di Drago",
				'pt-br': "Ira do Dragão",
				'de-de': "Drachenwut"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Se uma delas for coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
	},

	thirdParty: {
		cardmarket: 293391,
		tcgplayer: 124047
	}
}

export default card
