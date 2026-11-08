import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Séléroc",
		'es-es': "Lunatone",
		'it-it': "Lunatone",
		'pt-br': "Lunatone",
		'de-de': "Lunastein"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Draw",
				'fr-fr': "Double Pioche",
				'es-es': "Roba Doble",
				'it-it': "Pescata Doppia",
				'pt-br': "Compra Dupla",
				'de-de': "Zweifachzug"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cards.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Fighting",
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
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques ao Pokémon Defensor será reduzido em 20 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because it turns active on nights of the full moon, it is said to have some link to the lunar phases.",
	},

	thirdParty: {
		cardmarket: 281400,
		tcgplayer: 86930
	}
}

export default card
