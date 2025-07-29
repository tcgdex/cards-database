import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lotad",
		fr: "Nénupiot",
		es: "Lotad",
		it: "Lotad",
		pt: "Lotad",
		de: "Loturzel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		270,
	],

	hp: 60,

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
				en: "Surprise",
				fr: "Surprise",
				es: "Impresionar",
				it: "Sorpresa",
				pt: "Surpresa",
				de: "Überraschung"
			},
			effect: {
				en: "Choose a random card from your opponent’s hand. Your opponent reveals that card and shuffles it into their deck.",
				fr: "Choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
				es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
				it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
				pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
				de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 361283
	}
}

export default card
