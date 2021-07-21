import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
		es: "Tentacruel",
		it: "Tentacruel",
		pt: "Tentacruel",
		de: "Tentoxa"
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
		en: "Tentacool",
		fr: "Tentacool",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Void Tentacles",
				fr: "Tentacules du Néant",
				es: "Tentáculos Nihilistas",
				it: "Tentacoli Annichilenti",
				pt: "Tentáculos do Vácuo",
				de: "Tentakel der Leere"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused and Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido y Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene confuso e avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso e Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt und vergiftet."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Paranormal",
				fr: "Paranormal",
				es: "Sobrenatural",
				it: "Paranormale",
				pt: "Paranormal",
				de: "Paranormal"
			},
			effect: {
				en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Ultra Beasts.",
				fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques d’Ultra-Chimères.",
				es: "Durante el próximo turno de tu rival, evita todo el daño infligido a este Pokémon por ataques de Ultraentes.",
				it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon dagli attacchi delle Ultracreature.",
				pt: "Durante a próxima vez de jogar do seu oponente, prevenirá todo o dano causado a este Pokémon por ataques de Ultracriaturas.",
				de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken von Ultrabestien zugefügt wird."
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



}

export default card
