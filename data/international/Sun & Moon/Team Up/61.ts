import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Tentacruel",
		'fr-fr': "Tentacruel",
		'es-es': "Tentacruel",
		'it-it': "Tentacruel",
		'pt-br': "Tentacruel",
		'de-de': "Tentoxa"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		73,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Tentacool",
		'fr-fr': "Tentacool",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Void Tentacles",
				'fr-fr': "Tentacules du Néant",
				'es-es': "Tentáculos Nihilistas",
				'it-it': "Tentacoli Annichilenti",
				'pt-br': "Tentáculos do Vácuo",
				'de-de': "Tentakel der Leere"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Paranormal",
				'fr-fr': "Paranormal",
				'es-es': "Sobrenatural",
				'it-it': "Paranormale",
				'pt-br': "Paranormal",
				'de-de': "Paranormal"
			},
			effect: {
				'en-us': "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Ultra Beasts.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques d’Ultra-Chimères.",
				'es-es': "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Ultraentes.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi delle Ultracreature.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Ultracriaturas.",
				'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Ultrabestien zugefügt wird."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It fires off ultrasonic waves from its red orbs to weaken its prey, and then it wraps them up in its 80 tentacles.",
	},

	thirdParty: {
		cardmarket: 368991,
		tcgplayer: 183839
	}
}

export default card
