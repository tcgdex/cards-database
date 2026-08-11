import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		405,
	],

	hp: 140,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Snarl",
				'fr-fr': "Aboiement",
				'es-es': "Alarido",
				'it-it': "Urlorabbia",
				'pt-br': "Rosnado",
				'de-de': "Standpauke"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Na próxima vez de jogar do seu oponente, qualquer dano causado por ataques do Pokémon Defensor será reduzido em 20 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Luxray's ability to see through objects comes in handy when it's scouting for danger.",
	},

	thirdParty: {
		cardmarket: 288221,
		tcgplayer: 111553
	}
}

export default card
