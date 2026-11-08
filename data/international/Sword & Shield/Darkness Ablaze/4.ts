import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [47],

	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'es-es': "Parasect",
		'it-it': "Parasect",
		'pt-br': "Parasect",
		'de-de': "Parasek"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'de-de': "Paras"
	},

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Mushroom Tackle",
				'fr-fr': "Champi-Charge",
				'es-es': "Placaje Seta",
				'it-it': "Fungo-azione",
				'pt-br': "Colisão do Cogumelo",
				'de-de': "Pilztackle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Paralisado.",
				'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Solar Beam",
				'fr-fr': "Lance-Soleil",
				'es-es': "Rayo Solar",
				'it-it': "Solarraggio",
				'pt-br': "Raio Solar",
				'de-de': "Solarstrahl"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "The bug is mostly dead, with the mushroom on its back having become the main body. If the mushroom comes off, the bug stops moving."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482894,
				tcgplayer: 219068
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482894,
				tcgplayer: 219068
			}
		},
	],
}

export default card
