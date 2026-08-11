import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Armaldo",
		'fr-fr': "Armaldo",
		'es-es': "Armaldo",
		'it-it': "Armaldo",
		'pt-br': "Armaldo",
		'de-de': "Armaldo"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		348,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith",
		'es-es': "Anorith",
		'it-it': "Anorith",
		'pt-br': "Anorith",
		'de-de': "Anorith"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Rushing Water",
				'fr-fr': "Courant Fort",
				'es-es': "Fuerte Corriente",
				'it-it': "Forte Corrente",
				'pt-br': "Água Veloz",
				'de-de': "Stromschnelle"
			},
			effect: {
				'en-us': "Move an Energy from your opponent's Active Pokémon to 1 of his or her Benched Pokémon.",
				'fr-fr': "Déplacez une Énergie attachée au Pokémon Actif de votre adversaire vers l'un de ses Pokémon de Banc.",
				'es-es': "Mueve 1 Energía del Pokémon Activo de tu rival a 1 de sus Pokémon en Banca.",
				'it-it': "Sposta un'Energia dal Pokémon attivo del tuo avversario a uno dei suoi Pokémon in panchina.",
				'pt-br': "Mova uma Energia do Pokémon Ativo do seu oponente para 1 dos Pokémon no Banco dele(a).",
				'de-de': "Verschiebe 1 an das Aktive Pokémon deines Gegners angelegte Energie auf 1 Pokémon auf der Bank deines Gegners."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Guard Claw",
				'fr-fr': "Griffe de Garde",
				'es-es': "Garra Guardia",
				'it-it': "Difesartiglio",
				'pt-br': "Garra Protetora",
				'de-de': "Abwehrklaue"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Protected by a hard shell, its body is very sturdy. It skewers prey with its claws to feed.",
	},

	thirdParty: {
		cardmarket: 291627,
		tcgplayer: 121187
	}
}

export default card
