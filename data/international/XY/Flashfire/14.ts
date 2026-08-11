import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'es-es': "Agilidad",
				'it-it': "Agilità",
				'pt-br': "Agilidade",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, impedirá todos os efeitos dos ataques a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de Flammes",
				'es-es': "Cola de Fuego",
				'it-it': "Coda-Fiamma",
				'pt-br': "Cauda de Chamas",
				'de-de': "Flammenschweif"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster.",
	},

	thirdParty: {
		cardmarket: 281497,
		tcgplayer: 91147
	}
}

export default card
