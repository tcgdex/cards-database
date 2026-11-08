import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Wimpod",
		'fr-fr': "Sovkipou",
		'es-es': "Wimpod",
		'it-it': "Wimpod",
		'pt-br': "Wimpod",
		'de-de': "Reißlaus"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		767,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Sand Attack",
				'fr-fr': "Jet de Sable",
				'es-es': "Ataque Arena",
				'it-it': "Turbosabbia",
				'pt-br': "Ataque de Areia",
				'de-de': "Sandwirbel"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent’s next turn, your opponent flips a coin. If tails, that attack doesn’t happen.",
				'fr-fr': "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, l’attaque n’est pas lancée.",
				'es-es': "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no se hace.",
				'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell’attacco non ha luogo.",
				'pt-br': "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não acontecerá.",
				'de-de': "Wenn das Verteidigende Pokémon versucht, während des nächsten Zuges deines Gegners anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
			},
			damage: 10,

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
		'en-us': "It will pick up anything it finds on the ground. Sometimes it finds coins, so Murkrow and Meowth will go after it.",
	},

	thirdParty: {
		cardmarket: 388077,
		tcgplayer: 194973
	}
}

export default card
