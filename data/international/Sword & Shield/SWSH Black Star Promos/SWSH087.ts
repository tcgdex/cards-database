import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		'en-us': "Eevee VMAX",
		'fr-fr': "Évoli VMAX",
		'de-de': "Evoli VMAX",
		'es-es': "Eevee VMAX",
		'pt-br': "Eevee VMAX",
		'it-it': "Eevee VMAX"
	},

	rarity: "Promo",
	dexId: [133],
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Eevee V",
		'fr-fr': "Évoli-V",
		'de-de': "Evoli-V",
		'es-es': "Eevee V",
		'pt-br': "Eevee V",
		'it-it': "Eevee-V"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "G-Max Cuddle",
			'fr-fr': "Câlin G-Max",
			'de-de': "Giga-Gekuschel",
			'es-es': "Gigaternura",
			'pt-br': "Ternura G-Max",
			'it-it': "Gigabbraccio"
		},

		effect: {
			'en-us': "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			'de-de': "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			'es-es': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se hace.",
			'pt-br': "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não acontecerá.",
			'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 540656,
		tcgplayer: 232611
	}
}

export default card
