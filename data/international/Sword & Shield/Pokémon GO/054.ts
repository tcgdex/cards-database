import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [133],
	set: Set,

	name: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
		'es-es': "Eevee",
		'it-it': "Eevee",
		'pt-br': "Eevee",
		'de-de': "Evoli"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Whiny Voice",
			'fr-fr': "Voix Suppliante",
			'es-es': "Voz Quejica",
			'it-it': "Moine",
			'pt-br': "Voz Chorosa",
			'de-de': "Jammerstimme"
		},

		effect: {
			'en-us': "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			'fr-fr': "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			'es-es': "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			'it-it': "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			'pt-br': "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			'de-de': "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It has the ability to alter the composition of its body to suit its surrounding environment.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665277,
				tcgplayer: 276973
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665277,
				tcgplayer: 276973
			}
		},
	],
}

export default card
