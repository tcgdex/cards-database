import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'it-it': "Clefable",
		'pt-br': "Clefable",
		'de-de': "Pixi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
		'de-de': "Piepi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Follow Me",
				'fr-fr': "Par Ici",
				'es-es': "Señuelo",
				'it-it': "Sonoqui",
				'pt-br': "Isca-Viva",
				'de-de': "Spotlight"
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with your opponent's Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec le Pokémon Actif de votre adversaire.",
				'es-es': "Cambia 1 de los Pokémon en Banca de tu rival por el Pokémon Activo de tu rival.",
				'it-it': "Scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				'pt-br': "Troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo desse oponente.",
				'de-de': "Tausche 1 Pokémon auf der Bank deines Gegners gegen das Aktive Pokémon deines Gegners aus."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Moonblast",
				'fr-fr': "Pouvoir Lunaire",
				'es-es': "Fuerza Lunar",
				'it-it': "Forza Lunare",
				'pt-br': "Explosão Lunar",
				'de-de': "Mondgewalt"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 30 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 30, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques pelo Pokémon Defensor será reduzido em 30 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 30 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its hearing is so acute it can hear a pin drop over half a mile away. It lives on quiet mountains.",
	},

	thirdParty: {
		cardmarket: 281735,
		tcgplayer: 92249
	}
}

export default card
