import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [175],
	set: Set,

	name: {
		'fr-fr': "Togepi",
		'en-us': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Voix Suppliante",
			'en-us': "Whiny Voice",
			'es-es': "Voz Quejica",
			'it-it': "Moine",
			'pt-br': "Voz Chorosa",
			'de-de': "Jammerstimme"
		},

		effect: {
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Escolha uma carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no baralho dele.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Roulé-Boulé",
			'en-us': "Rolling Tackle",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It is considered to be a symbol of good luck. Its shell is said to be filled with happiness.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725163,
				tcgplayer: 509825,
				cardtrader: 255768
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725163,
				tcgplayer: 509825,
				cardtrader: 255768
			}
		},
	],

	illustrator: "Natsumi Yoshida",

	
}

export default card
