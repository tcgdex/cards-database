import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		244,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Screen",
				'fr-fr': "Barrière de Flammes",
				'es-es': "Pantallama",
				'it-it': "Muro di Fuoco",
				'pt-br': "Cortina de Chamas",
				'de-de': "Flammenschirm"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 30 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Tackle",
				'fr-fr': "Charge Énergétique",
				'es-es': "Placaje Ardiente",
				'it-it': "Calorazione",
				'pt-br': "Golpe de Colisão Aquecido",
				'de-de': "Hitze Tackle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este Pokémon se hace 30 puntos de daño a sí mismo.",
				'it-it': "Lancia una moneta. Se esce croce, questo Pokémon infligge 30 danni a se stesso.",
				'pt-br': "Jogue uma moeda. Se sair coroa, o Pokémon causará 30 de danos a ele mesmo.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" fügt sich dieses Pokémon selbst 30 Schadenspunkte zu."
			},
			damage: 130,

		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "{title}:",
			'fr-fr': "{title}:",
			'es-es': "{title}:",
			'it-it': "{title}:",
			'pt-br': "{title}:",
			'de-de': "{title}:"
		},

		effect: {
			'en-us': "{title}: This Pokémon may have up to 2 Pokémon Tool cards attached to it.",
			'fr-fr': "{title}: Jusqu'à 2 cartes Outil Pokémon peuvent être attachées à ce Pokémon.",
			'es-es': "{title}: Este Pokémon puede tener hasta 2 cartas de Herramienta Pokémon unidas a él.",
			'it-it': "{title}: Questo Pokémon può avere fino a due carte Oggetto Pokémon assegnate.",
			'pt-br': "{title}: Este Pokémon pode ter até dois cards de Ferramenta Pokémon ligados a ele.",
			'de-de': "{title}: An dieses Pokémon können bis zu 2 Pokémon-Ausrüstungen angelegt sein."
		}
	}],

	description: {
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe.",
	},

	thirdParty: {
		cardmarket: 284195,
		tcgplayer: 100621
	}
}

export default card
