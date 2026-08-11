import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss",
		'es-es': "Kingler",
		'it-it': "Kingler",
		'pt-br': "Kingler",
		'de-de': "Kingler"
	},

	illustrator: "match",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
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
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido a este Pokémon por ataques se reduce en 20 (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti a questo Pokémon dagli attacchi sono ridotti di 20, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado a este Pokémon por ataques será reduzido em 20 (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der diesem Pokémon durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
				'es-es': "Martillazo",
				'it-it': "Martellata",
				'pt-br': "Martelo Caranguejo",
				'de-de': "Krabbhammer"
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

	retreat: 3,

	description: {
		'en-us': "The large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
	},

	thirdParty: {
		cardmarket: 281817,
		tcgplayer: 94147
	}
}

export default card
