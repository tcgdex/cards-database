import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
		'es-es': "Magnemite",
		'it-it': "Magnemite",
		'pt-br': "Magnemite",
		'de-de': "Magnetilo"
	},

	illustrator: "Fumie Kittaka",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Mirror Shot",
				'fr-fr': "Miroi-Tir",
				'es-es': "Disparo Espejo",
				'it-it': "Cristalcolpo",
				'pt-br': "Tiro no Espelho",
				'de-de': "Spiegelsalve"
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
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It's frequently the cause of power outages, which is why some power plants send out electrical signals that it can't stand.",
	},

	thirdParty: {
		cardmarket: 398539,
		tcgplayer: 201353
	}
}

export default card
