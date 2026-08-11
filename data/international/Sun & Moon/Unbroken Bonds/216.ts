import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Venomoth GX",
		'fr-fr': "Aéromite GX",
		'es-es': "Venomoth GX",
		'it-it': "Venomoth GX",
		'pt-br': "Venomoth GX",
		'de-de': "Omot GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		49,
	],

	hp: 200,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Venonat",
		'fr-fr': "Mimitoss"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],

			name: {
				'en-us': "Shinobi Mastery",
				'fr-fr': "Maîtrise Shinobi",
				'es-es': "Maestría Shinobi",
				'it-it': "Maestria Ninja",
				'pt-br': "Maestria Ninja",
				'de-de': "Kunst der Shinobi"
			},

			effect: {
				'en-us': "If you played Koga’s Trap from your hand during this turn, this attack does 90 more damage. If you played Janine from your hand during this turn, prevent all damage done to this Pokémon by attacks from Basic Pokémon during your opponent’s next turn.",
				'fr-fr': "Si vous avez joué Piège de Koga de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires. Si vous avez joué Jeannine de votre main pendant ce tour, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base pendant le prochain tour de votre adversaire.",
				'es-es': "Si has jugado 1 carta de Trampa de Koga de tu mano durante este turno, este ataque hace 90 puntos de daño más. Si has jugado 1 carta de Sachiko de tu mano durante este turno, evita todo el daño infligido a este Pokémon por ataques de Pokémon Básicos durante el próximo turno de tu rival.",
				'it-it': "Se hai giocato Trappola di Koga dalla tua mano durante questo turno, questo attacco infligge 90 danni in più. Se hai giocato Nina dalla tua mano durante questo turno, previeni tutti i danni inflitti a questo Pokémon dagli attacchi dei Pokémon Base durante il prossimo turno del tuo avversario.",
				'pt-br': "Se você jogou Armadilha do Koga da sua mão durante esta vez de jogar, este ataque causará 90 pontos de dano a mais. Se você jogou Janine da sua mão durante esta vez de jogar, prevenirá todo o dano causado a este Pokémon por ataques de Pokémon Básicos durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wenn du Kogas Falle während dieses Zuges aus deiner Hand gespielt hast, fügt diese Attacke 90 Schadenspunkte mehr zu. Wenn du Janina während dieses Zuges aus deiner Hand gespielt hast, verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken von Basis-Pokémon zugefügt wird."
			},

			damage: "110+"
		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ten-Card Return GX",
				'fr-fr': "Dix Cartes Retrouvées GX",
				'es-es': "Retribución Diez Cartas GX",
				'it-it': "Ritorno da Dieci GX",
				'pt-br': "Retorno de Dez Cartas GX",
				'de-de': "Zehner GX"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 10 cards. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 10 cartas. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca 10 carte. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 10 cartas (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 10 Karten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372717,
		tcgplayer: 189052
	}
}

export default card
