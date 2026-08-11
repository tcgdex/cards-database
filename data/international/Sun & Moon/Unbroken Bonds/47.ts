import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss",
		'es-es': "Kingler",
		'it-it': "Kingler",
		'pt-br': "Kingler",
		'de-de': "Kingler"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Beam",
				'fr-fr': "Bulles d’O",
				'es-es': "Rayo Burbuja",
				'it-it': "Bollaraggio",
				'pt-br': "Jato de Bolhas",
				'de-de': "Blubbstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 80,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Massive Rend",
				'fr-fr': "Déchirure Massive",
				'es-es': "Corte Masivo",
				'it-it': "Supersquarcio",
				'pt-br': "Laceração Massiva",
				'de-de': "Riesiger Riss"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
	},

	thirdParty: {
		cardmarket: 372338,
		tcgplayer: 189146
	}
}

export default card
