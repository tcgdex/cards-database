import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Whiny Voice",
			fr: "Voix Suppliante",
			es: "Voz Quejica",
			it: "Moine",
			pt: "Voz Chorosa",
			de: "Jammerstimme"
		},

		effect: {
			en: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck.",
			fr: "Choisissez une carte au hasard dans la main de votre adversaire. Votre adversaire montre cette carte, puis la mélange avec son deck.",
			es: "Elige 1 carta aleatoria de la mano de tu rival. Tu rival enseña esa carta, la pone en su baraja y las baraja todas.",
			it: "Scegli una carta a caso dalla mano del tuo avversario. Il tuo avversario mostra quella carta e la rimischia nel suo mazzo.",
			pt: "Escolha 1 carta aleatória da mão do seu oponente. Seu oponente revela aquela carta e a embaralha no próprio baralho.",
			de: "Wähle 1 zufällige Karte aus der Hand deines Gegners. Dein Gegner zeigt dir jene Karte und mischt sie in sein Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			pt: "Investida",
			de: "Tackle"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card