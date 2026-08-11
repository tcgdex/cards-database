import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'es-es': "Seel",
		'it-it': "Seel",
		'pt-br': "Seel",
		'de-de': "Jurob"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growl",
				'fr-fr': "Rugissement",
				'es-es': "Gruñido",
				'it-it': "Ruggito",
				'pt-br': "Rosnadura",
				'de-de': "Heuler"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 20 (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, cualquier daño infligido por ataques del Pokémon Defensor se reduce en 20 (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, i danni inflitti dagli attacchi del Pokémon difensore sono ridotti di 20, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, qualquer dano causado por ataques do Pokémon Defensor será reduzido em 20 (antes da aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners wird Schaden, der durch Angriffe des Verteidigenden Pokémon zugefügt wird, um 20 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
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

	retreat: 2,

	description: {
		'en-us': "Covered with light blue fur, its hide is thick and tough. It is active in bitter cold of -40 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 293385,
		tcgplayer: 124041
	}
}

export default card
