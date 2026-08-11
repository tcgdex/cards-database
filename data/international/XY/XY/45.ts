import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Electrode",
		'fr-fr': "Électrode",
		'es-es': "Electrode",
		'it-it': "Electrode",
		'pt-br': "Electrode",
		'de-de': "Lektrobal"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
		'fr-fr': "Voltorbe",
		'es-es': "Voltorb",
		'it-it': "Voltorb",
		'pt-br': "Voltorb",
		'de-de': "Voltobal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Eerie Impulse",
				'fr-fr': "Ondes Étranges",
				'es-es': "Onda Anómala",
				'it-it': "Elettromistero",
				'pt-br': "Impulso Misterioso",
				'de-de': "Mystowellen"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, descarta 1 Energía unida a 1 de los Pokémon de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, scarta un'Energia assegnata a uno dei Pokémon del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, descarte uma Energia ligada a 1 dos Pokémon do seu oponente.",
				'de-de': "Wirf 1 Münze. Lege bei \"Kopf\" 1 an ein gegnerisches Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It explodes in response to even minor stimuli. It is feared, with the nickname of \"The Bomb Ball.\"",
	},

	thirdParty: {
		cardmarket: 281382,
		tcgplayer: 85163
	}
}

export default card
