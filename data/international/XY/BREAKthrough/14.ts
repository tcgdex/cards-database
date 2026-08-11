import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		665,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Scatterbug",
		'fr-fr': "Lépidonille",
		'es-es': "Scatterbug",
		'it-it': "Scatterbug",
		'pt-br': "Scatterbug",
		'de-de': "Purmel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Protect",
				'fr-fr': "Abri",
				'es-es': "Protección",
				'it-it': "Protezione",
				'pt-br': "Proteção",
				'de-de': "Schutzschild"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, impedirá todos os efeitos dos ataques a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The beaks of birds can't begin to scratch its stalwart body. To defend itself, it spews powder.",
	},

	thirdParty: {
		cardmarket: 286260,
		tcgplayer: 107133
	}
}

export default card
