import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Mewtwo GX",
		'fr-fr': "Mewtwo GX",
		'es-es': "Mewtwo GX",
		'it-it': "Mewtwo GX",
		'pt-br': "Mewtwo GX",
		'de-de': "Mewtu GX"
	},

	illustrator: "MPC Film",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 190,

	types: [
		"Psychic",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Lévikinésie",
				'es-es': "Telequinesis",
				'it-it': "Telecinesi",
				'pt-br': "Telecinese",
				'de-de': "Telekinese"
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent’s Pokémon. This damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reigning Pulse",
				'fr-fr': "Vibration Régnante",
				'es-es': "Pulso Imperante",
				'it-it': "Regiopulsar",
				'pt-br': "Pulso Reinante",
				'de-de': "Andauernder Puls"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 120,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Nova GX",
				'fr-fr': "Nova Psy GX",
				'es-es': "Estrella Psíquica GX",
				'it-it': "Psiconova GX",
				'pt-br': "Supernova Psíquica GX",
				'de-de': "Psycho-Nova GX"
			},
			effect: {
				'en-us': "Prevent all damage done to this Pokémon by attacks during your opponent’s next turn. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Prevenirá todo o dano causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
}

export default card
