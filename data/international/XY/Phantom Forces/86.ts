import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Regigigas",
		'fr-fr': "Regigigas",
		'es-es': "Regigigas",
		'it-it': "Regigigas",
		'pt-br': "Regigigas",
		'de-de': "Regigigas"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		486,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Daunt",
				'fr-fr': "Découragement",
				'es-es': "Arredrar",
				'it-it': "Scoraggiare",
				'pt-br': "Atemorizar",
				'de-de': "Entmutigen"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 40 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 40, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques ao Pokémon Defensor será reduzido em 40 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 40 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
				'es-es': "Impacto Pesado",
				'it-it': "Impatto Pesante",
				'pt-br': "Impacto Pesado",
				'de-de': "Schwerer Einschlag"
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

	retreat: 4,

	description: {
		'en-us': "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.",
	},

	thirdParty: {
		cardmarket: 281892,
		tcgplayer: 94654
	}
}

export default card
